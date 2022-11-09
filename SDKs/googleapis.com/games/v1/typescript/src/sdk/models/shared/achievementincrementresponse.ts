import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AchievementIncrementResponse
/** 
 * An achievement increment response
**/
export class AchievementIncrementResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentSteps" })
  currentSteps?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=newlyUnlocked" })
  newlyUnlocked?: boolean;
}
