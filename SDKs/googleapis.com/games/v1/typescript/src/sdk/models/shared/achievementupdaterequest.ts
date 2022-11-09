import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GamesAchievementIncrement } from "./gamesachievementincrement";
import { GamesAchievementSetStepsAtLeast } from "./gamesachievementsetstepsatleast";

export enum AchievementUpdateRequestUpdateTypeEnum {
    AchievementUpdateTypeUnspecified = "ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED"
,    Reveal = "REVEAL"
,    Unlock = "UNLOCK"
,    Increment = "INCREMENT"
,    SetStepsAtLeast = "SET_STEPS_AT_LEAST"
}


// AchievementUpdateRequest
/** 
 * A request to update an achievement.
**/
export class AchievementUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=achievementId" })
  achievementId?: string;

  @Metadata({ data: "json, name=incrementPayload" })
  incrementPayload?: GamesAchievementIncrement;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=setStepsAtLeastPayload" })
  setStepsAtLeastPayload?: GamesAchievementSetStepsAtLeast;

  @Metadata({ data: "json, name=updateType" })
  updateType?: AchievementUpdateRequestUpdateTypeEnum;
}
