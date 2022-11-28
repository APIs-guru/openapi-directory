import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerExperienceInfo } from "./playerexperienceinfo";
import { ProfileSettings } from "./profilesettings";
export declare enum PlayerFriendStatusEnum {
    FriendStatusUnspecified = "FRIEND_STATUS_UNSPECIFIED",
    NoRelationship = "NO_RELATIONSHIP",
    Friend = "FRIEND"
}
/**
 * A representation of the individual components of the name.
**/
export declare class PlayerName extends SpeakeasyBase {
    familyName?: string;
    givenName?: string;
}
/**
 * A Player resource.
**/
export declare class Player extends SpeakeasyBase {
    avatarImageUrl?: string;
    bannerUrlLandscape?: string;
    bannerUrlPortrait?: string;
    displayName?: string;
    experienceInfo?: PlayerExperienceInfo;
    friendStatus?: PlayerFriendStatusEnum;
    gamePlayerId?: string;
    kind?: string;
    name?: PlayerName;
    originalPlayerId?: string;
    playerId?: string;
    profileSettings?: ProfileSettings;
    title?: string;
}
