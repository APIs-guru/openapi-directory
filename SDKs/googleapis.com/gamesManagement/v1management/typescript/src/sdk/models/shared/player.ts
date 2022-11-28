import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GamesPlayerExperienceInfoResource } from "./gamesplayerexperienceinforesource";
import { ProfileSettings } from "./profilesettings";



// PlayerName
/** 
 * An object representation of the individual components of the player's name. For some players, these fields may not be present.
**/
export class PlayerName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName?: string;
}


// Player
/** 
 * A Player resource.
**/
export class Player extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatarImageUrl" })
  avatarImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerUrlLandscape" })
  bannerUrlLandscape?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerUrlPortrait" })
  bannerUrlPortrait?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=experienceInfo" })
  experienceInfo?: GamesPlayerExperienceInfoResource;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: PlayerName;

  @SpeakeasyMetadata({ data: "json, name=originalPlayerId" })
  originalPlayerId?: string;

  @SpeakeasyMetadata({ data: "json, name=playerId" })
  playerId?: string;

  @SpeakeasyMetadata({ data: "json, name=profileSettings" })
  profileSettings?: ProfileSettings;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
