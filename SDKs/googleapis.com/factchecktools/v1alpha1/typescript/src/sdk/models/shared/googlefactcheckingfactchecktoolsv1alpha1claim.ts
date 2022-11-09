import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview } from "./googlefactcheckingfactchecktoolsv1alpha1claimreview";


// GoogleFactcheckingFactchecktoolsV1alpha1Claim
/** 
 * Information about the claim.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1Claim extends SpeakeasyBase {
  @Metadata({ data: "json, name=claimDate" })
  claimDate?: string;

  @Metadata({ data: "json, name=claimReview", elemType: shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview })
  claimReview?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview[];

  @Metadata({ data: "json, name=claimant" })
  claimant?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
