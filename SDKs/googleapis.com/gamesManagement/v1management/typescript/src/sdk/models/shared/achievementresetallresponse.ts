import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AchievementResetResponse } from "./achievementresetresponse";


// AchievementResetAllResponse
/** 
 * Achievement reset all response.
**/
export class AchievementResetAllResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=results", elemType: shared.AchievementResetResponse })
  results?: AchievementResetResponse[];
}
