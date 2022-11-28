import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor } from "./googlefactcheckingfactchecktoolsv1alpha1claimauthor";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating } from "./googlefactcheckingfactchecktoolsv1alpha1claimrating";



// GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup
/** 
 * Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=claimAppearances" })
  claimAppearances?: string[];

  @SpeakeasyMetadata({ data: "json, name=claimAuthor" })
  claimAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor;

  @SpeakeasyMetadata({ data: "json, name=claimDate" })
  claimDate?: string;

  @SpeakeasyMetadata({ data: "json, name=claimFirstAppearance" })
  claimFirstAppearance?: string;

  @SpeakeasyMetadata({ data: "json, name=claimLocation" })
  claimLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=claimReviewed" })
  claimReviewed?: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
