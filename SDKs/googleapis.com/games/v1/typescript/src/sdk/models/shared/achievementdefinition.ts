import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AchievementDefinitionAchievementTypeEnum {
    AchievementTypeUnspecified = "ACHIEVEMENT_TYPE_UNSPECIFIED"
,    Standard = "STANDARD"
,    Incremental = "INCREMENTAL"
}

export enum AchievementDefinitionInitialStateEnum {
    InitialAchievementStateUnspecified = "INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED"
,    Hidden = "HIDDEN"
,    Revealed = "REVEALED"
,    Unlocked = "UNLOCKED"
}


// AchievementDefinition
/** 
 * An achievement definition object.
**/
export class AchievementDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=achievementType" })
  achievementType?: AchievementDefinitionAchievementTypeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=experiencePoints" })
  experiencePoints?: string;

  @Metadata({ data: "json, name=formattedTotalSteps" })
  formattedTotalSteps?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=initialState" })
  initialState?: AchievementDefinitionInitialStateEnum;

  @Metadata({ data: "json, name=isRevealedIconUrlDefault" })
  isRevealedIconUrlDefault?: boolean;

  @Metadata({ data: "json, name=isUnlockedIconUrlDefault" })
  isUnlockedIconUrlDefault?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=revealedIconUrl" })
  revealedIconUrl?: string;

  @Metadata({ data: "json, name=totalSteps" })
  totalSteps?: number;

  @Metadata({ data: "json, name=unlockedIconUrl" })
  unlockedIconUrl?: string;
}
