import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AchievementUpdateRequest } from "./achievementupdaterequest";



// AchievementUpdateMultipleRequest
/** 
 * A list of achievement update requests.
**/
export class AchievementUpdateMultipleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=updates", elemType: AchievementUpdateRequest })
  updates?: AchievementUpdateRequest[];
}
