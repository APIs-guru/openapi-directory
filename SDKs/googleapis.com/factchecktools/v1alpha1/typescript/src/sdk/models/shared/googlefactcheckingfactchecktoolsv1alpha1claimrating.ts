import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating
/** 
 * Information about the claim rating.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating extends SpeakeasyBase {
  @Metadata({ data: "json, name=bestRating" })
  bestRating?: number;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=ratingExplanation" })
  ratingExplanation?: string;

  @Metadata({ data: "json, name=ratingValue" })
  ratingValue?: number;

  @Metadata({ data: "json, name=textualRating" })
  textualRating?: string;

  @Metadata({ data: "json, name=worstRating" })
  worstRating?: number;
}
