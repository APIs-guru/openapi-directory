import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AchievementIncrementResponse
/** 
 * An achievement increment response
**/
export class AchievementIncrementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentSteps" })
  currentSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=newlyUnlocked" })
  newlyUnlocked?: boolean;
}
