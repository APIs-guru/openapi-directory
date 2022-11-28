import { SpeakeasyBase } from "../../../internal/utils";
import { RegionPostalCodeAreaPostalCodeRange } from "./regionpostalcodeareapostalcoderange";
/**
 * A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible via the account's `ShippingSettings.postalCodeGroups` resource.
**/
export declare class RegionPostalCodeArea extends SpeakeasyBase {
    postalCodes?: RegionPostalCodeAreaPostalCodeRange[];
    regionCode?: string;
}
