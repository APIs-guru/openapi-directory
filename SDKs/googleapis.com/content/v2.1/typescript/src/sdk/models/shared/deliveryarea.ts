import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryAreaPostalCodeRange } from "./deliveryareapostalcoderange";



// DeliveryArea
/** 
 * A delivery area for the product. Only one of `countryCode` or `postalCodeRange` must be set.
**/
export class DeliveryArea extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCodeRange" })
  postalCodeRange?: DeliveryAreaPostalCodeRange;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
