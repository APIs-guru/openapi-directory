import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AchievementUpdateResponseCurrentStateEnum {
    UpdatedAchievementStateUnspecified = "UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED",
    Hidden = "HIDDEN",
    Revealed = "REVEALED",
    Unlocked = "UNLOCKED"
}
/**
 * An updated achievement.
**/
export declare class AchievementUpdateResponse extends SpeakeasyBase {
    achievementId?: string;
    currentState?: AchievementUpdateResponseCurrentStateEnum;
    currentSteps?: number;
    kind?: string;
    newlyUnlocked?: boolean;
    updateOccurred?: boolean;
}
