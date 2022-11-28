import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AchievementResetResponse } from "./achievementresetresponse";



// AchievementResetAllResponse
/** 
 * Achievement reset all response.
**/
export class AchievementResetAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: AchievementResetResponse })
  results?: AchievementResetResponse[];
}
