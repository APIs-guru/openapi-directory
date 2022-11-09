import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AchievementUpdateResponse } from "./achievementupdateresponse";


// AchievementUpdateMultipleResponse
/** 
 * Response message for UpdateMultipleAchievements rpc.
**/
export class AchievementUpdateMultipleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=updatedAchievements", elemType: shared.AchievementUpdateResponse })
  updatedAchievements?: AchievementUpdateResponse[];
}
