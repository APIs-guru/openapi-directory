import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionPostalCodeAreaPostalCodeRange } from "./regionpostalcodeareapostalcoderange";



// RegionPostalCodeArea
/** 
 * A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible via the account's `ShippingSettings.postalCodeGroups` resource.
**/
export class RegionPostalCodeArea extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=postalCodes", elemType: RegionPostalCodeAreaPostalCodeRange })
  postalCodes?: RegionPostalCodeAreaPostalCodeRange[];

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
