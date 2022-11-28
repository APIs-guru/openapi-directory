import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Reviewer
/** 
 * Represents the author of the review.
**/
export class Reviewer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=isAnonymous" })
  isAnonymous?: boolean;

  @SpeakeasyMetadata({ data: "json, name=profilePhotoUrl" })
  profilePhotoUrl?: string;
}
