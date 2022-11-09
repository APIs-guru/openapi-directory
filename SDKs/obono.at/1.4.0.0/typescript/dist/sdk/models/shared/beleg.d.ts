import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SignierteBelegdaten } from "./signiertebelegdaten";
export declare enum BelegBelegTypenEnum {
    Belegkreisinitialisierung = "Belegkreisinitialisierung",
    Kassenbericht = "Kassenbericht",
    Monatsabschluss = "Monatsabschluss",
    Startbeleg = "Startbeleg",
    Storno = "Storno",
    Systembeleg = "Systembeleg",
    Training = "Training"
}
export declare class Beleg extends SpeakeasyBase {
    belegCodes?: string[];
    belegTypen?: BelegBelegTypenEnum[];
    belegdaten?: SignierteBelegdaten;
    jws?: string;
    qr?: string;
    qrLink?: string;
    registrierkasseUuid?: string;
    signaturerstellungseinheitUuid?: string;
    href?: string;
    uuid?: string;
}
