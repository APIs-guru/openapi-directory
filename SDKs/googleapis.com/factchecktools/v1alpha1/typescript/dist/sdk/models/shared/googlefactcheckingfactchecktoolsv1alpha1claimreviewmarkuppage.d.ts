import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor } from "./googlefactcheckingfactchecktoolsv1alpha1claimreviewauthor";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup } from "./googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkup";
/**
 * Holds one or more instances of `ClaimReview` markup for a webpage.
**/
export declare class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage extends SpeakeasyBase {
    claimReviewAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor;
    claimReviewMarkups?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup[];
    name?: string;
    pageUrl?: string;
    publishDate?: string;
    versionId?: string;
}
