import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostenSatzEnum {
    Normal = "NORMAL",
    Ermaessigt1 = "ERMAESSIGT1",
    Ermaessigt2 = "ERMAESSIGT2",
    Besonders = "BESONDERS",
    Null = "NULL"
}
export declare class Posten extends SpeakeasyBase {
    bezeichnung: string;
    bruttoBetrag: number;
    externerBelegBelegkreis?: string;
    externerBelegBezeichnung?: string;
    externerBelegReferenz?: string;
    menge: number;
    nettoBetrag: number;
    satz: PostenSatzEnum;
}
