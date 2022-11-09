import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerAchievementAchievementStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Hidden = "HIDDEN"
,    Revealed = "REVEALED"
,    Unlocked = "UNLOCKED"
}


// PlayerAchievement
/** 
 * An achievement object.
**/
export class PlayerAchievement extends SpeakeasyBase {
  @Metadata({ data: "json, name=achievementState" })
  achievementState?: PlayerAchievementAchievementStateEnum;

  @Metadata({ data: "json, name=currentSteps" })
  currentSteps?: number;

  @Metadata({ data: "json, name=experiencePoints" })
  experiencePoints?: string;

  @Metadata({ data: "json, name=formattedCurrentStepsString" })
  formattedCurrentStepsString?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastUpdatedTimestamp" })
  lastUpdatedTimestamp?: string;
}
