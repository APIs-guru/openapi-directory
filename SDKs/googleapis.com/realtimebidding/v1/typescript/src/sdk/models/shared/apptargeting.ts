import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NumericTargetingDimension } from "./numerictargetingdimension";
import { StringTargetingDimension } from "./stringtargetingdimension";



// AppTargeting
/** 
 * A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent.
**/
export class AppTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mobileAppCategoryTargeting" })
  mobileAppCategoryTargeting?: NumericTargetingDimension;

  @SpeakeasyMetadata({ data: "json, name=mobileAppTargeting" })
  mobileAppTargeting?: StringTargetingDimension;
}
