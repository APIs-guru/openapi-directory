import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryAreaPostalCodeRange } from "./deliveryareapostalcoderange";
/**
 * A delivery area for the product. Only one of `countryCode` or `postalCodeRange` must be set.
**/
export declare class DeliveryArea extends SpeakeasyBase {
    countryCode?: string;
    postalCodeRange?: DeliveryAreaPostalCodeRange;
    regionCode?: string;
}
