import { SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameDiasporaedOut } from "./firstlastnamediasporaedout";
import { FirstLastNameGenderedOut } from "./firstlastnamegenderedout";
import { FirstLastNameOriginedOut } from "./firstlastnameoriginedout";
/**
 * Represent multiple classifications for corridor sender and receiver (gender, country, origin, diaspora)
**/
export declare class CorridorOut extends SpeakeasyBase {
    firstLastNameDiasporaedOut?: FirstLastNameDiasporaedOut;
    firstLastNameGenderedOut?: FirstLastNameGenderedOut;
    firstLastNameOriginedOut?: FirstLastNameOriginedOut;
    id?: string;
    script?: string;
}
