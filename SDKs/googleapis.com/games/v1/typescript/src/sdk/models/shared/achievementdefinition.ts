import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AchievementDefinitionAchievementTypeEnum {
    AchievementTypeUnspecified = "ACHIEVEMENT_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Incremental = "INCREMENTAL"
}

export enum AchievementDefinitionInitialStateEnum {
    InitialAchievementStateUnspecified = "INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED",
    Hidden = "HIDDEN",
    Revealed = "REVEALED",
    Unlocked = "UNLOCKED"
}


// AchievementDefinition
/** 
 * An achievement definition object.
**/
export class AchievementDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=achievementType" })
  achievementType?: AchievementDefinitionAchievementTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=experiencePoints" })
  experiencePoints?: string;

  @SpeakeasyMetadata({ data: "json, name=formattedTotalSteps" })
  formattedTotalSteps?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=initialState" })
  initialState?: AchievementDefinitionInitialStateEnum;

  @SpeakeasyMetadata({ data: "json, name=isRevealedIconUrlDefault" })
  isRevealedIconUrlDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isUnlockedIconUrlDefault" })
  isUnlockedIconUrlDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=revealedIconUrl" })
  revealedIconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSteps" })
  totalSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=unlockedIconUrl" })
  unlockedIconUrl?: string;
}
