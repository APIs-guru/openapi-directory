import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor
/** 
 * Information about the claim author.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=jobTitle" })
  jobTitle?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sameAs" })
  sameAs?: string;
}
