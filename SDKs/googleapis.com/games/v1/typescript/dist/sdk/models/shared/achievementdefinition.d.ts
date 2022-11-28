import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AchievementDefinitionAchievementTypeEnum {
    AchievementTypeUnspecified = "ACHIEVEMENT_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Incremental = "INCREMENTAL"
}
export declare enum AchievementDefinitionInitialStateEnum {
    InitialAchievementStateUnspecified = "INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED",
    Hidden = "HIDDEN",
    Revealed = "REVEALED",
    Unlocked = "UNLOCKED"
}
/**
 * An achievement definition object.
**/
export declare class AchievementDefinition extends SpeakeasyBase {
    achievementType?: AchievementDefinitionAchievementTypeEnum;
    description?: string;
    experiencePoints?: string;
    formattedTotalSteps?: string;
    id?: string;
    initialState?: AchievementDefinitionInitialStateEnum;
    isRevealedIconUrlDefault?: boolean;
    isUnlockedIconUrlDefault?: boolean;
    kind?: string;
    name?: string;
    revealedIconUrl?: string;
    totalSteps?: number;
    unlockedIconUrl?: string;
}
