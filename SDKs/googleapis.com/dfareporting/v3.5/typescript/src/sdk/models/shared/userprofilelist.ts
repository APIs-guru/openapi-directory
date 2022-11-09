import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserProfile } from "./userprofile";


// UserProfileList
/** 
 * Represents the list of user profiles.
**/
export class UserProfileList extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=items", elemType: shared.UserProfile })
  items?: UserProfile[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
