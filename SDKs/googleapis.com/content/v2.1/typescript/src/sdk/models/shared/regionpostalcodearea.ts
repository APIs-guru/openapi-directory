import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegionPostalCodeAreaPostalCodeRange } from "./regionpostalcodeareapostalcoderange";


// RegionPostalCodeArea
/** 
 * A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible via the account's `ShippingSettings.postalCodeGroups` resource.
**/
export class RegionPostalCodeArea extends SpeakeasyBase {
  @Metadata({ data: "json, name=postalCodes", elemType: shared.RegionPostalCodeAreaPostalCodeRange })
  postalCodes?: RegionPostalCodeAreaPostalCodeRange[];

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
