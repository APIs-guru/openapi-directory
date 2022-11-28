import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AchievementUpdateResponse } from "./achievementupdateresponse";



// AchievementUpdateMultipleResponse
/** 
 * Response message for UpdateMultipleAchievements rpc.
**/
export class AchievementUpdateMultipleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAchievements", elemType: AchievementUpdateResponse })
  updatedAchievements?: AchievementUpdateResponse[];
}
