import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage } from "./googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage";
/**
 * Response from listing `ClaimReview` markup.
**/
export declare class GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse extends SpeakeasyBase {
    claimReviewMarkupPages?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage[];
    nextPageToken?: string;
}
