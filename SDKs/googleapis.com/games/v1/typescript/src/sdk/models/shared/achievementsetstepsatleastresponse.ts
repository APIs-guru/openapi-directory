import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AchievementSetStepsAtLeastResponse
/** 
 * An achievement set steps at least response.
**/
export class AchievementSetStepsAtLeastResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentSteps" })
  currentSteps?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=newlyUnlocked" })
  newlyUnlocked?: boolean;
}
