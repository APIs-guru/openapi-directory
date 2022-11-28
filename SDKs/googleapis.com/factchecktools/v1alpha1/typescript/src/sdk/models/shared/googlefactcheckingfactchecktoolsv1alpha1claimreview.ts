import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1Publisher } from "./googlefactcheckingfactchecktoolsv1alpha1publisher";



// GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview
/** 
 * Information about a claim review.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: GoogleFactcheckingFactchecktoolsV1alpha1Publisher;

  @SpeakeasyMetadata({ data: "json, name=reviewDate" })
  reviewDate?: string;

  @SpeakeasyMetadata({ data: "json, name=textualRating" })
  textualRating?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
