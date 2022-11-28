import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProfileSettingsFriendsListVisibilityEnum {
    FriendsListVisibilityUnspecified = "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
    Visible = "VISIBLE",
    RequestRequired = "REQUEST_REQUIRED",
    Unavailable = "UNAVAILABLE"
}
/**
 * Profile settings
**/
export declare class ProfileSettings extends SpeakeasyBase {
    friendsListVisibility?: ProfileSettingsFriendsListVisibilityEnum;
    kind?: string;
    profileVisible?: boolean;
}
