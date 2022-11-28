import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1Publisher } from "./googlefactcheckingfactchecktoolsv1alpha1publisher";
/**
 * Information about a claim review.
**/
export declare class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview extends SpeakeasyBase {
    languageCode?: string;
    publisher?: GoogleFactcheckingFactchecktoolsV1alpha1Publisher;
    reviewDate?: string;
    textualRating?: string;
    title?: string;
    url?: string;
}
