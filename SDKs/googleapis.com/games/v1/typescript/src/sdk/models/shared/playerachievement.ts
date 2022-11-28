import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerAchievementAchievementStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Hidden = "HIDDEN",
    Revealed = "REVEALED",
    Unlocked = "UNLOCKED"
}


// PlayerAchievement
/** 
 * An achievement object.
**/
export class PlayerAchievement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=achievementState" })
  achievementState?: PlayerAchievementAchievementStateEnum;

  @SpeakeasyMetadata({ data: "json, name=currentSteps" })
  currentSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=experiencePoints" })
  experiencePoints?: string;

  @SpeakeasyMetadata({ data: "json, name=formattedCurrentStepsString" })
  formattedCurrentStepsString?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTimestamp" })
  lastUpdatedTimestamp?: string;
}
