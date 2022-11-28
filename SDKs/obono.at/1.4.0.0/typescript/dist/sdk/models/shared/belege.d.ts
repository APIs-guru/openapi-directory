import { SpeakeasyBase } from "../../../internal/utils";
import { Beleg } from "./beleg";
export declare class BelegeBelegeGruppe extends SpeakeasyBase {
    belegeKompakt: string[];
    signaturzertifikat: string;
    zertifizierungsstellen: string[];
}
export declare class Belege extends SpeakeasyBase {
    belege?: Beleg[];
    belegeGruppe?: BelegeBelegeGruppe[];
}
