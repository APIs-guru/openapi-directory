import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor
/** 
 * Information about the claim author.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=jobTitle" })
  jobTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sameAs" })
  sameAs?: string;
}
