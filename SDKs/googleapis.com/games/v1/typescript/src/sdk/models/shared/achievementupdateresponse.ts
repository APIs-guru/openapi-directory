import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AchievementUpdateResponseCurrentStateEnum {
    UpdatedAchievementStateUnspecified = "UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED"
,    Hidden = "HIDDEN"
,    Revealed = "REVEALED"
,    Unlocked = "UNLOCKED"
}


// AchievementUpdateResponse
/** 
 * An updated achievement.
**/
export class AchievementUpdateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=achievementId" })
  achievementId?: string;

  @Metadata({ data: "json, name=currentState" })
  currentState?: AchievementUpdateResponseCurrentStateEnum;

  @Metadata({ data: "json, name=currentSteps" })
  currentSteps?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=newlyUnlocked" })
  newlyUnlocked?: boolean;

  @Metadata({ data: "json, name=updateOccurred" })
  updateOccurred?: boolean;
}
