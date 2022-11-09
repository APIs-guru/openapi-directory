import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AchievementUpdateRequest } from "./achievementupdaterequest";


// AchievementUpdateMultipleRequest
/** 
 * A list of achievement update requests.
**/
export class AchievementUpdateMultipleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=updates", elemType: shared.AchievementUpdateRequest })
  updates?: AchievementUpdateRequest[];
}
