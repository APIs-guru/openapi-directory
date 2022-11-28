import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GamesAchievementIncrement
/** 
 * The payload to request to increment an achievement.
**/
export class GamesAchievementIncrement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=steps" })
  steps?: number;
}
