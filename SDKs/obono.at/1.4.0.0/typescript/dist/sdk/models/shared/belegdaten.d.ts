import { SpeakeasyBase } from "../../../internal/utils";
import { Posten } from "./posten";
import { Rabatt } from "./rabatt";
import { Zahlung } from "./zahlung";
export declare enum BelegdatenUnternehmenIdTypEnum {
    Steuernummer = "steuernummer",
    Uid = "uid",
    Gln = "gln"
}
/**
 * The `Beleg` to be signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".
**/
export declare class Belegdaten extends SpeakeasyBase {
    externerBelegBelegkreis?: string;
    externerBelegBezeichnung?: string;
    externerBelegReferenz?: string;
    kunde?: string;
    notizen?: string[];
    posten?: Posten[];
    rabatte?: Rabatt[];
    storno?: boolean;
    stornoBelegUuid?: string;
    stornoText?: string;
    training?: boolean;
    unternehmenAdresse1?: string;
    unternehmenAdresse2?: string;
    unternehmenFusszeile?: string;
    unternehmenId?: string;
    unternehmenIdTyp?: BelegdatenUnternehmenIdTypEnum;
    unternehmenKopfzeile?: string;
    unternehmenName?: string;
    unternehmenOrt?: string;
    unternehmenPlz?: string;
    zahlungen?: Zahlung[];
}
