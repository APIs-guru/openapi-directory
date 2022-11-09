import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Posten } from "./posten";
import { Rabatt } from "./rabatt";
import { Zahlung } from "./zahlung";
export declare enum SignierteBelegdatenUnternehmenIdTypEnum {
    Steuernummer = "steuernummer",
    Uid = "uid",
    Gln = "gln"
}
/**
 * The complete `Beleg` that has been signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".
**/
export declare class SignierteBelegdaten extends SpeakeasyBase {
    belegDatumUhrzeit?: string;
    belegnummer?: string;
    betragBrutto?: number;
    betragNetto?: number;
    betragSatzBesondersBrutto?: number;
    betragSatzBesondersNetto?: number;
    betragSatzErmaessigt1Brutto?: number;
    betragSatzErmaessigt1Netto?: number;
    betragSatzErmaessigt2Brutto?: number;
    betragSatzErmaessigt2Netto?: number;
    betragSatzNormalBrutto?: number;
    betragSatzNormalNetto?: number;
    betragSatzNullBrutto?: number;
    betragSatzNullNetto?: number;
    externerBelegBelegkreis?: string;
    externerBelegBezeichnung?: string;
    externerBelegReferenz?: string;
    kassenId?: string;
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
    unternehmenIdTyp?: SignierteBelegdatenUnternehmenIdTypEnum;
    unternehmenKopfzeile?: string;
    unternehmenName?: string;
    unternehmenOrt?: string;
    unternehmenPlz?: string;
    zahlungen?: Zahlung[];
    zertifikatSeriennummer?: string;
}
