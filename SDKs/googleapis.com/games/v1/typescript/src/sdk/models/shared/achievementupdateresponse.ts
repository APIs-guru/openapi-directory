import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AchievementUpdateResponseCurrentStateEnum {
    UpdatedAchievementStateUnspecified = "UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED",
    Hidden = "HIDDEN",
    Revealed = "REVEALED",
    Unlocked = "UNLOCKED"
}


// AchievementUpdateResponse
/** 
 * An updated achievement.
**/
export class AchievementUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=achievementId" })
  achievementId?: string;

  @SpeakeasyMetadata({ data: "json, name=currentState" })
  currentState?: AchievementUpdateResponseCurrentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=currentSteps" })
  currentSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=newlyUnlocked" })
  newlyUnlocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updateOccurred" })
  updateOccurred?: boolean;
}
