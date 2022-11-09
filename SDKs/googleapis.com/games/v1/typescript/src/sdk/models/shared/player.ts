import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlayerExperienceInfo } from "./playerexperienceinfo";
import { ProfileSettings } from "./profilesettings";

export enum PlayerFriendStatusEnum {
    FriendStatusUnspecified = "FRIEND_STATUS_UNSPECIFIED"
,    NoRelationship = "NO_RELATIONSHIP"
,    Friend = "FRIEND"
}


// PlayerName
/** 
 * A representation of the individual components of the name.
**/
export class PlayerName extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyName" })
  familyName?: string;

  @Metadata({ data: "json, name=givenName" })
  givenName?: string;
}


// Player
/** 
 * A Player resource.
**/
export class Player extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatarImageUrl" })
  avatarImageUrl?: string;

  @Metadata({ data: "json, name=bannerUrlLandscape" })
  bannerUrlLandscape?: string;

  @Metadata({ data: "json, name=bannerUrlPortrait" })
  bannerUrlPortrait?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=experienceInfo" })
  experienceInfo?: PlayerExperienceInfo;

  @Metadata({ data: "json, name=friendStatus" })
  friendStatus?: PlayerFriendStatusEnum;

  @Metadata({ data: "json, name=gamePlayerId" })
  gamePlayerId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: PlayerName;

  @Metadata({ data: "json, name=originalPlayerId" })
  originalPlayerId?: string;

  @Metadata({ data: "json, name=playerId" })
  playerId?: string;

  @Metadata({ data: "json, name=profileSettings" })
  profileSettings?: ProfileSettings;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
