import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating
/** 
 * Information about the claim rating.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bestRating" })
  bestRating?: number;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ratingExplanation" })
  ratingExplanation?: string;

  @SpeakeasyMetadata({ data: "json, name=ratingValue" })
  ratingValue?: number;

  @SpeakeasyMetadata({ data: "json, name=textualRating" })
  textualRating?: string;

  @SpeakeasyMetadata({ data: "json, name=worstRating" })
  worstRating?: number;
}
