import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProfileSettingsFriendsListVisibilityEnum {
    FriendsListVisibilityUnspecified = "FRIENDS_LIST_VISIBILITY_UNSPECIFIED"
,    Visible = "VISIBLE"
,    RequestRequired = "REQUEST_REQUIRED"
,    Unavailable = "UNAVAILABLE"
}


// ProfileSettings
/** 
 * Profile settings
**/
export class ProfileSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=friendsListVisibility" })
  friendsListVisibility?: ProfileSettingsFriendsListVisibilityEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=profileVisible" })
  profileVisible?: boolean;
}
