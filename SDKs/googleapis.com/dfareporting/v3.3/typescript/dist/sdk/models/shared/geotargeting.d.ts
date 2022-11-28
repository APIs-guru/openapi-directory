import { SpeakeasyBase } from "../../../internal/utils";
import { City } from "./city";
import { Country } from "./country";
import { Metro } from "./metro";
import { PostalCode } from "./postalcode";
import { Region } from "./region";
/**
 * Geographical Targeting.
**/
export declare class GeoTargeting extends SpeakeasyBase {
    cities?: City[];
    countries?: Country[];
    excludeCountries?: boolean;
    metros?: Metro[];
    postalCodes?: PostalCode[];
    regions?: Region[];
}
