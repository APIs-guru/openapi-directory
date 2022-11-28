import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AchievementSetStepsAtLeastResponse
/** 
 * An achievement set steps at least response.
**/
export class AchievementSetStepsAtLeastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentSteps" })
  currentSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=newlyUnlocked" })
  newlyUnlocked?: boolean;
}
