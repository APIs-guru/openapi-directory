import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FreeListingsProgramStatusReviewIneligibilityReasonDetails
/** 
 * Additional details for review ineligibility reasons.
**/
export class FreeListingsProgramStatusReviewIneligibilityReasonDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cooldownTime" })
  cooldownTime?: string;
}
