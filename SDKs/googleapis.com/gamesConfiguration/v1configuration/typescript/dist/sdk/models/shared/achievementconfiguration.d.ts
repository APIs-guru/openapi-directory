import { SpeakeasyBase } from "../../../internal/utils";
import { AchievementConfigurationDetail } from "./achievementconfigurationdetail";
export declare enum AchievementConfigurationAchievementTypeEnum {
    AchievementTypeUnspecified = "ACHIEVEMENT_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Incremental = "INCREMENTAL"
}
export declare enum AchievementConfigurationInitialStateEnum {
    InitialStateUnspecified = "INITIAL_STATE_UNSPECIFIED",
    Hidden = "HIDDEN",
    Revealed = "REVEALED"
}
/**
 * An achievement configuration resource.
**/
export declare class AchievementConfiguration extends SpeakeasyBase {
    achievementType?: AchievementConfigurationAchievementTypeEnum;
    draft?: AchievementConfigurationDetail;
    id?: string;
    initialState?: AchievementConfigurationInitialStateEnum;
    kind?: string;
    published?: AchievementConfigurationDetail;
    stepsToUnlock?: number;
    token?: string;
}
