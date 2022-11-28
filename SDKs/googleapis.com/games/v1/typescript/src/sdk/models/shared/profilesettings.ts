import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProfileSettingsFriendsListVisibilityEnum {
    FriendsListVisibilityUnspecified = "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
    Visible = "VISIBLE",
    RequestRequired = "REQUEST_REQUIRED",
    Unavailable = "UNAVAILABLE"
}


// ProfileSettings
/** 
 * Profile settings
**/
export class ProfileSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=friendsListVisibility" })
  friendsListVisibility?: ProfileSettingsFriendsListVisibilityEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=profileVisible" })
  profileVisible?: boolean;
}
