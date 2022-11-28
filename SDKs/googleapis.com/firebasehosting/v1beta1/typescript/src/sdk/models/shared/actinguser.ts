import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActingUser
/** 
 * Contains metadata about the user who performed an action, such as creating a release or finalizing a version.
**/
export class ActingUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;
}
