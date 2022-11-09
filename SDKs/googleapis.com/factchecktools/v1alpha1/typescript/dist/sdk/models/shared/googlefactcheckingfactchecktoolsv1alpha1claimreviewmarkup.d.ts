import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor } from "./googlefactcheckingfactchecktoolsv1alpha1claimauthor";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating } from "./googlefactcheckingfactchecktoolsv1alpha1claimrating";
/**
 * Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field.
**/
export declare class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup extends SpeakeasyBase {
    claimAppearances?: string[];
    claimAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor;
    claimDate?: string;
    claimFirstAppearance?: string;
    claimLocation?: string;
    claimReviewed?: string;
    rating?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating;
    url?: string;
}
