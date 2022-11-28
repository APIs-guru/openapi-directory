import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerAchievementAchievementStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Hidden = "HIDDEN",
    Revealed = "REVEALED",
    Unlocked = "UNLOCKED"
}
/**
 * An achievement object.
**/
export declare class PlayerAchievement extends SpeakeasyBase {
    achievementState?: PlayerAchievementAchievementStateEnum;
    currentSteps?: number;
    experiencePoints?: string;
    formattedCurrentStepsString?: string;
    id?: string;
    kind?: string;
    lastUpdatedTimestamp?: string;
}
