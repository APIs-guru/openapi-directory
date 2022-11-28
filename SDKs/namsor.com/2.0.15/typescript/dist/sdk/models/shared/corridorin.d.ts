import { SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameGeoIn } from "./firstlastnamegeoin";
/**
 * Represent any transnational interaction between names (ex. remittance, communication, cross-border investment, airline travel
**/
export declare class CorridorIn extends SpeakeasyBase {
    firstLastNameGeoFrom?: FirstLastNameGeoIn;
    firstLastNameGeoTo?: FirstLastNameGeoIn;
    id?: string;
}
