import { SpeakeasyBase } from "../../../internal/utils";
import { GamesAchievementIncrement } from "./gamesachievementincrement";
import { GamesAchievementSetStepsAtLeast } from "./gamesachievementsetstepsatleast";
export declare enum AchievementUpdateRequestUpdateTypeEnum {
    AchievementUpdateTypeUnspecified = "ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED",
    Reveal = "REVEAL",
    Unlock = "UNLOCK",
    Increment = "INCREMENT",
    SetStepsAtLeast = "SET_STEPS_AT_LEAST"
}
/**
 * A request to update an achievement.
**/
export declare class AchievementUpdateRequest extends SpeakeasyBase {
    achievementId?: string;
    incrementPayload?: GamesAchievementIncrement;
    kind?: string;
    setStepsAtLeastPayload?: GamesAchievementSetStepsAtLeast;
    updateType?: AchievementUpdateRequestUpdateTypeEnum;
}
