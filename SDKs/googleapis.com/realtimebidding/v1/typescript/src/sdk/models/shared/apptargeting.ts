import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NumericTargetingDimension } from "./numerictargetingdimension";
import { StringTargetingDimension } from "./stringtargetingdimension";


// AppTargeting
/** 
 * A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent.
**/
export class AppTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=mobileAppCategoryTargeting" })
  mobileAppCategoryTargeting?: NumericTargetingDimension;

  @Metadata({ data: "json, name=mobileAppTargeting" })
  mobileAppTargeting?: StringTargetingDimension;
}
