
function makeQRCode(content, desc, config = {}) {

    config.descriptionclass ??= "qrdescription"
    config.containerclass ??= "tablee"
    config.fg ??= "rgba(25,25,22,1)"
    config.bg ??= "rgba(255,255,255,0)"
    config.width ??= 500
    config.height ??= 500

    window.xxxqrcodeglobalid ??= 0
    let id = window.xxxqrcodeglobalid += 1
    let tablee = document.createElement("table");
    tablee.setAttribute("class", 'tablee');
    tablee.setAttribute("id", id.toString());
    tablee.setAttribute("border", '1');

    // baris 1
    let tr_1_1 = document.createElement("tr");
    tr_1_1.setAttribute("class", 'h-10 fs-9');
    tablee.appendChild(tr_1_1);

    let td_1_1 = document.createElement("td");
    td_1_1.setAttribute("style", 'width: 19%;');
    td_1_1.textContent = 'Nama';
    tr_1_1.appendChild(td_1_1);

    let td_2_1 = document.createElement("td");
    td_2_1.setAttribute("style", 'width: 1%;');
    td_2_1.textContent = ':';
    tr_1_1.appendChild(td_2_1);

    let td_3_1 = document.createElement("td");
    td_3_1.setAttribute("style", 'width: 50%;');
    td_3_1.textContent = 'nama';
    tr_1_1.appendChild(td_3_1);

    let td_4_1 = document.createElement("td");
    td_4_1.setAttribute("style", 'width: 30%;');
    td_4_1.setAttribute("rowspan", '6');
    td_4_1.textContent = 'gambar qrcode';
    tr_1_1.appendChild(td_4_1);

    // baris 2
    let tr_2_2 = document.createElement("tr");
    tr_2_2.setAttribute("class", 'h-10 fs-9');
    tablee.appendChild(tr_2_2);

    let td_1_2 = document.createElement("td");
    td_1_2.textContent = 'NIS';
    tr_2_2.appendChild(td_1_2);

    let td_2_2 = document.createElement("td");
    td_2_2.textContent = ':';
    tr_2_2.appendChild(td_2_2);

    let td_3_2 = document.createElement("td");
    td_3_2.textContent = '1233.3435.5466';
    tr_2_2.appendChild(td_3_2);

    // baris 3
    let tr_3_3 = document.createElement("tr");
    tr_3_3.setAttribute("class", 'h-10 fs-9');
    tablee.appendChild(tr_3_3);

    let td_1_3 = document.createElement("td");
    td_1_3.textContent = 'Angkatan';
    tr_3_3.appendChild(td_1_3);

    let td_2_3 = document.createElement("td");
    td_2_3.textContent = ':';
    tr_3_3.appendChild(td_2_3);

    let td_3_3 = document.createElement("td");
    td_3_3.textContent = '2012';
    tr_3_3.appendChild(td_3_3);

    // baris 4
    let tr_4_4 = document.createElement("tr");
    tr_4_4.setAttribute("class", 'h-10 fs-9');
    tablee.appendChild(tr_4_4);

    let td_1_4 = document.createElement("td");
    td_1_4.textContent = 'Sekolah';
    tr_4_4.appendChild(td_1_4);

    let td_2_4 = document.createElement("td");
    td_2_4.textContent = ':';
    tr_4_4.appendChild(td_2_4);

    let td_3_4 = document.createElement("td");
    td_3_4.textContent = 'SMK TI Annajiyah Bahrul Ulum';
    tr_4_4.appendChild(td_3_4);

    // baris 5
    let tr_5_5 = document.createElement("tr");
    tr_5_5.setAttribute("class", 'h-10 fs-9');
    tablee.appendChild(tr_5_5);

    let td_1_5 = document.createElement("td");
    td_1_5.textContent = 'Pondok';
    tr_5_5.appendChild(td_1_5);

    let td_2_5 = document.createElement("td");
    td_2_5.textContent = ':';
    tr_5_5.appendChild(td_2_5);

    let td_3_5 = document.createElement("td");
    td_3_5.textContent = 'namaPondok';
    tr_5_5.appendChild(td_3_5);

    // baris 5
    let tr_6_6 = document.createElement("tr");
    tr_6_6.setAttribute("class", 'h-10 fs-9');
    tablee.appendChild(tr_6_6);

    let td_1_6 = document.createElement("td");
    td_1_6.setAttribute("class", 'fs-8');
    td_1_6.textContent = '*Kartu ini disahkan secara elektronik dan bisa scan qr-code yang nantinya mengarah ke website resmi kami.';
    td_1_6.setAttribute("colspan", '3');
    tr_6_6.appendChild(td_1_6);

    // let qr=new QRCode(tablee, {
    //     text: content,
    //     width: config.width,
    //     height: config.height,
    //     colorDark: config.fg,
    //     colorLight: config.bg,
    //     correctLevel: QRCode.CorrectLevel.H,
    // });

    // let qrdescription = document.createElement("div")
    // qrdescription.setAttribute("class", config.descriptionclass)
    // qrdescription.textContent = desc
    // tablee.appendChild(qrdescription)

    return tablee
}

for(let i=0;i<15;i++) {
    document.body.appendChild(makeQRCode("BRG00420", "BRG00420"))
}