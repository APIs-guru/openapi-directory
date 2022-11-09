import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GamesAchievementSetStepsAtLeast
/** 
 * The payload to request to increment an achievement.
**/
export class GamesAchievementSetStepsAtLeast extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=steps" })
  steps?: number;
}
