import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliveryAreaPostalCodeRange } from "./deliveryareapostalcoderange";


// DeliveryArea
/** 
 * A delivery area for the product. Only one of `countryCode` or `postalCodeRange` must be set.
**/
export class DeliveryArea extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=postalCodeRange" })
  postalCodeRange?: DeliveryAreaPostalCodeRange;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
