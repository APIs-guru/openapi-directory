import { SpeakeasyBase } from "../../../internal/utils";
import { GamesPlayerLevelResource } from "./gamesplayerlevelresource";
/**
 * 1P/3P metadata about the player's experience.
**/
export declare class GamesPlayerExperienceInfoResource extends SpeakeasyBase {
    currentExperiencePoints?: string;
    currentLevel?: GamesPlayerLevelResource;
    lastLevelUpTimestampMillis?: string;
    nextLevel?: GamesPlayerLevelResource;
}
