import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage } from "./googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage";



// GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
/** 
 * Response from listing `ClaimReview` markup.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=claimReviewMarkupPages", elemType: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage })
  claimReviewMarkupPages?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
