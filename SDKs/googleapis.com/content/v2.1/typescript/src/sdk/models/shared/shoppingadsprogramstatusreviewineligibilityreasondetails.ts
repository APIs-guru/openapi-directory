import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShoppingAdsProgramStatusReviewIneligibilityReasonDetails
/** 
 * Additional details for review ineligibility reasons.
**/
export class ShoppingAdsProgramStatusReviewIneligibilityReasonDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cooldownTime" })
  cooldownTime?: string;
}
