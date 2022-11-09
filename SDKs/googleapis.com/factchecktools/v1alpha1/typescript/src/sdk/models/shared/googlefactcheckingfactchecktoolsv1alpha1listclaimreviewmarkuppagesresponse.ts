import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage } from "./googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage";


// GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
/** 
 * Response from listing `ClaimReview` markup.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=claimReviewMarkupPages", elemType: shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage })
  claimReviewMarkupPages?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
