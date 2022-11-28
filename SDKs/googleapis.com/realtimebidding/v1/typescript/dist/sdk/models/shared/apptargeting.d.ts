import { SpeakeasyBase } from "../../../internal/utils";
import { NumericTargetingDimension } from "./numerictargetingdimension";
import { StringTargetingDimension } from "./stringtargetingdimension";
/**
 * A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent.
**/
export declare class AppTargeting extends SpeakeasyBase {
    mobileAppCategoryTargeting?: NumericTargetingDimension;
    mobileAppTargeting?: StringTargetingDimension;
}
