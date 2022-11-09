import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor } from "./googlefactcheckingfactchecktoolsv1alpha1claimauthor";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating } from "./googlefactcheckingfactchecktoolsv1alpha1claimrating";


// GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup
/** 
 * Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup extends SpeakeasyBase {
  @Metadata({ data: "json, name=claimAppearances" })
  claimAppearances?: string[];

  @Metadata({ data: "json, name=claimAuthor" })
  claimAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor;

  @Metadata({ data: "json, name=claimDate" })
  claimDate?: string;

  @Metadata({ data: "json, name=claimFirstAppearance" })
  claimFirstAppearance?: string;

  @Metadata({ data: "json, name=claimLocation" })
  claimLocation?: string;

  @Metadata({ data: "json, name=claimReviewed" })
  claimReviewed?: string;

  @Metadata({ data: "json, name=rating" })
  rating?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
