import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GamesAchievementIncrement
/** 
 * The payload to request to increment an achievement.
**/
export class GamesAchievementIncrement extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=steps" })
  steps?: number;
}
