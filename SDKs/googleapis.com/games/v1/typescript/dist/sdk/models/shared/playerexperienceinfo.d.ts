import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerLevel } from "./playerlevel";
/**
 * 1P/3P metadata about the player's experience.
**/
export declare class PlayerExperienceInfo extends SpeakeasyBase {
    currentExperiencePoints?: string;
    currentLevel?: PlayerLevel;
    kind?: string;
    lastLevelUpTimestampMillis?: string;
    nextLevel?: PlayerLevel;
}
