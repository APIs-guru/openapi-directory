import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ComptageRequestComptageEnum {
    One = "1"
}
export declare enum ComptageRequestGmtZoneEnum {
    PacificMidway = "Pacific/Midway",
    AmericaAdak = "America/Adak",
    EtcGmtPlus10 = "Etc/GMT+10",
    PacificMarquesas = "Pacific/Marquesas",
    PacificGambier = "Pacific/Gambier",
    AmericaAnchorage = "America/Anchorage",
    AmericaEnsenada = "America/Ensenada",
    EtcGmtPlus8 = "Etc/GMT+8",
    AmericaLosAngeles = "America/Los_Angeles",
    AmericaDenver = "America/Denver",
    AmericaChihuahua = "America/Chihuahua",
    AmericaDawsonCreek = "America/Dawson_Creek",
    AmericaBelize = "America/Belize",
    AmericaCancun = "America/Cancun",
    ChileEasterIsland = "Chile/EasterIsland",
    AmericaChicago = "America/Chicago",
    AmericaNewYork = "America/New_York",
    AmericaHavana = "America/Havana",
    AmericaBogota = "America/Bogota",
    AmericaCaracas = "America/Caracas",
    AmericaSantiago = "America/Santiago",
    AmericaLaPaz = "America/La_Paz",
    AtlanticStanley = "Atlantic/Stanley",
    AmericaCampoGrande = "America/Campo_Grande",
    AmericaGooseBay = "America/Goose_Bay",
    AmericaGlaceBay = "America/Glace_Bay",
    AmericaStJohns = "America/St_Johns",
    AmericaAraguaina = "America/Araguaina",
    AmericaMontevideo = "America/Montevideo",
    AmericaMiquelon = "America/Miquelon",
    AmericaGodthab = "America/Godthab",
    AmericaArgentinaBuenosAires = "America/Argentina/Buenos_Aires",
    AmericaSaoPaulo = "America/Sao_Paulo",
    AmericaNoronha = "America/Noronha",
    AtlanticCapeVerde = "Atlantic/Cape_Verde",
    AtlanticAzores = "Atlantic/Azores",
    EuropeBelfast = "Europe/Belfast",
    EuropeDublin = "Europe/Dublin",
    EuropeLisbon = "Europe/Lisbon",
    EuropeLondon = "Europe/London",
    AfricaAbidjan = "Africa/Abidjan",
    EuropeAmsterdam = "Europe/Amsterdam",
    EuropeBelgrade = "Europe/Belgrade",
    EuropeBrussels = "Europe/Brussels",
    AfricaAlgiers = "Africa/Algiers",
    AfricaWindhoek = "Africa/Windhoek",
    AsiaBeirut = "Asia/Beirut",
    AfricaCairo = "Africa/Cairo",
    AsiaGaza = "Asia/Gaza",
    AfricaBlantyre = "Africa/Blantyre",
    AsiaJerusalem = "Asia/Jerusalem",
    EuropeMinsk = "Europe/Minsk",
    AsiaDamascus = "Asia/Damascus",
    EuropeMoscow = "Europe/Moscow",
    AfricaAddisAbaba = "Africa/Addis_Ababa",
    AsiaTehran = "Asia/Tehran",
    AsiaDubai = "Asia/Dubai",
    AsiaYerevan = "Asia/Yerevan",
    AsiaKabul = "Asia/Kabul",
    AsiaYekaterinburg = "Asia/Yekaterinburg",
    AsiaTashkent = "Asia/Tashkent",
    AsiaKolkata = "Asia/Kolkata",
    AsiaKatmandu = "Asia/Katmandu",
    AsiaDhaka = "Asia/Dhaka",
    AsiaNovosibirsk = "Asia/Novosibirsk",
    AsiaRangoon = "Asia/Rangoon",
    AsiaBangkok = "Asia/Bangkok",
    AsiaKrasnoyarsk = "Asia/Krasnoyarsk",
    AsiaHongKong = "Asia/Hong_Kong",
    AsiaIrkutsk = "Asia/Irkutsk",
    AustraliaPerth = "Australia/Perth",
    AustraliaEucla = "Australia/Eucla",
    AsiaTokyo = "Asia/Tokyo",
    AsiaSeoul = "Asia/Seoul",
    AsiaYakutsk = "Asia/Yakutsk",
    AustraliaAdelaide = "Australia/Adelaide",
    AustraliaDarwin = "Australia/Darwin",
    AustraliaBrisbane = "Australia/Brisbane",
    AustraliaHobart = "Australia/Hobart",
    AsiaVladivostok = "Asia/Vladivostok",
    AustraliaLordHowe = "Australia/Lord_Howe",
    EtcGmt11 = "Etc/GMT-11",
    AsiaMagadan = "Asia/Magadan",
    PacificNorfolk = "Pacific/Norfolk",
    AsiaAnadyr = "Asia/Anadyr",
    PacificAuckland = "Pacific/Auckland",
    EtcGmt12 = "Etc/GMT-12",
    PacificChatham = "Pacific/Chatham",
    PacificTongatapu = "Pacific/Tongatapu",
    PacificKiritimati = "Pacific/Kiritimati"
}
export declare enum ComptageRequestNumAzurEnum {
    One = "1"
}
export declare enum ComptageRequestSmslongEnum {
    NineHundredAndNinetyNine = "999"
}
export declare class ComptageRequest extends SpeakeasyBase {
    comptage: ComptageRequestComptageEnum;
    dateEnvoi?: string;
    emetteur?: string;
    gmtZone?: ComptageRequestGmtZoneEnum;
    keyid: string;
    nostop?: string;
    num: string;
    numAzur?: ComptageRequestNumAzurEnum;
    sms: string;
    smslong?: ComptageRequestSmslongEnum;
    tracker?: string;
    ucs2?: string;
}
