import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Psd2RequestLgEnum {
    EnGb = "en-gb",
    BgBg = "bg-bg",
    CsCz = "cs-cz",
    DaDk = "da-dk",
    DeDe = "de-de",
    EeEt = "ee-et",
    ElGr = "el-gr",
    EsEs = "es-es",
    FiFi = "fi-fi",
    FrFr = "fr-fr",
    GaIe = "ga-ie",
    HuHu = "hu-hu",
    ItIt = "it-it",
    LvLv = "lv-lv",
    LtLt = "lt-lt",
    MtMt = "mt-mt",
    NlNl = "nl-nl",
    PlPl = "pl-pl",
    SkSk = "sk-sk",
    SlSi = "sl-si",
    SvSe = "sv-se"
}
export declare class Psd2Request extends SpeakeasyBase {
    amount: number;
    apiKey: string;
    apiSecret: string;
    codeLength?: number;
    country?: string;
    lg?: Psd2RequestLgEnum;
    nextEventWait?: number;
    number: string;
    payee: string;
    pinExpiry?: number;
    workflowId?: number;
}
