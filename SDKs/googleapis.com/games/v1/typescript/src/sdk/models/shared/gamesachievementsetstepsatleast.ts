import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GamesAchievementSetStepsAtLeast
/** 
 * The payload to request to increment an achievement.
**/
export class GamesAchievementSetStepsAtLeast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=steps" })
  steps?: number;
}
