import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1Publisher } from "./googlefactcheckingfactchecktoolsv1alpha1publisher";


// GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview
/** 
 * Information about a claim review.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=publisher" })
  publisher?: GoogleFactcheckingFactchecktoolsV1alpha1Publisher;

  @Metadata({ data: "json, name=reviewDate" })
  reviewDate?: string;

  @Metadata({ data: "json, name=textualRating" })
  textualRating?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
