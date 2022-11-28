import { SpeakeasyBase } from "../../../internal/utils";
import { GamesPlayerExperienceInfoResource } from "./gamesplayerexperienceinforesource";
import { ProfileSettings } from "./profilesettings";
/**
 * An object representation of the individual components of the player's name. For some players, these fields may not be present.
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
    experienceInfo?: GamesPlayerExperienceInfoResource;
    kind?: string;
    name?: PlayerName;
    originalPlayerId?: string;
    playerId?: string;
    profileSettings?: ProfileSettings;
    title?: string;
}
