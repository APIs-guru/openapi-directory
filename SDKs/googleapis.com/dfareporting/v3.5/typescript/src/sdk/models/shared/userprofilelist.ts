import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserProfile } from "./userprofile";



// UserProfileList
/** 
 * Represents the list of user profiles.
**/
export class UserProfileList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: UserProfile })
  items?: UserProfile[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
