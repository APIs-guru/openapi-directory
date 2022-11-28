import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor
/** 
 * Information about the claim review author.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
