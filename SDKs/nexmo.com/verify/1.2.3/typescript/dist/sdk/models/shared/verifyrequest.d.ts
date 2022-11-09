import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum VerifyRequestLgEnum {
    ArXa = "ar-xa",
    CsCz = "cs-cz",
    CyCy = "cy-cy",
    CyGb = "cy-gb",
    DaDk = "da-dk",
    DeDe = "de-de",
    ElGr = "el-gr",
    EnAu = "en-au",
    EnGb = "en-gb",
    EnIn = "en-in",
    EnUs = "en-us",
    EsEs = "es-es",
    EsMx = "es-mx",
    EsUs = "es-us",
    FiFi = "fi-fi",
    FilPh = "fil-ph",
    FrCa = "fr-ca",
    FrFr = "fr-fr",
    HiIn = "hi-in",
    HuHu = "hu-hu",
    IdId = "id-id",
    IsIs = "is-is",
    ItIt = "it-it",
    JaJp = "ja-jp",
    KoKr = "ko-kr",
    NbNo = "nb-no",
    NlNl = "nl-nl",
    PlPl = "pl-pl",
    PtBr = "pt-br",
    PtPt = "pt-pt",
    RoRo = "ro-ro",
    RuRu = "ru-ru",
    SvSe = "sv-se",
    ThTh = "th-th",
    TrTr = "tr-tr",
    ViVn = "vi-vn",
    YueCn = "yue-cn",
    ZhCn = "zh-cn",
    ZhTw = "zh-tw"
}
export declare class VerifyRequest extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
    brand: string;
    codeLength?: number;
    country?: string;
    lg?: VerifyRequestLgEnum;
    nextEventWait?: number;
    number: string;
    pinExpiry?: number;
    senderId?: string;
    workflowId?: number;
}
