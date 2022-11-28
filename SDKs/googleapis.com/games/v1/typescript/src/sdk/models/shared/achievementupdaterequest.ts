import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GamesAchievementIncrement } from "./gamesachievementincrement";
import { GamesAchievementSetStepsAtLeast } from "./gamesachievementsetstepsatleast";


export enum AchievementUpdateRequestUpdateTypeEnum {
    AchievementUpdateTypeUnspecified = "ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED",
    Reveal = "REVEAL",
    Unlock = "UNLOCK",
    Increment = "INCREMENT",
    SetStepsAtLeast = "SET_STEPS_AT_LEAST"
}


// AchievementUpdateRequest
/** 
 * A request to update an achievement.
**/
export class AchievementUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=achievementId" })
  achievementId?: string;

  @SpeakeasyMetadata({ data: "json, name=incrementPayload" })
  incrementPayload?: GamesAchievementIncrement;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=setStepsAtLeastPayload" })
  setStepsAtLeastPayload?: GamesAchievementSetStepsAtLeast;

  @SpeakeasyMetadata({ data: "json, name=updateType" })
  updateType?: AchievementUpdateRequestUpdateTypeEnum;
}
