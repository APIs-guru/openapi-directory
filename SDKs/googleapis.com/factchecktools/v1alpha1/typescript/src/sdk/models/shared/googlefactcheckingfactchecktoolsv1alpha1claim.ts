import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview } from "./googlefactcheckingfactchecktoolsv1alpha1claimreview";



// GoogleFactcheckingFactchecktoolsV1alpha1Claim
/** 
 * Information about the claim.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1Claim extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=claimDate" })
  claimDate?: string;

  @SpeakeasyMetadata({ data: "json, name=claimReview", elemType: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview })
  claimReview?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview[];

  @SpeakeasyMetadata({ data: "json, name=claimant" })
  claimant?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
