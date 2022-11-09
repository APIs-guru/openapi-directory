import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor
/** 
 * Information about the claim review author.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
