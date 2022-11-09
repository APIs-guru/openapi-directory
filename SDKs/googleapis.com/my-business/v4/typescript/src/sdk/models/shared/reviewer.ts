import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Reviewer
/** 
 * Represents the author of the review.
**/
export class Reviewer extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=isAnonymous" })
  isAnonymous?: boolean;

  @Metadata({ data: "json, name=profilePhotoUrl" })
  profilePhotoUrl?: string;
}
