import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AchievementConfigurationDetail } from "./achievementconfigurationdetail";
import { AchievementConfigurationDetail } from "./achievementconfigurationdetail";

export enum AchievementConfigurationAchievementTypeEnum {
    AchievementTypeUnspecified = "ACHIEVEMENT_TYPE_UNSPECIFIED"
,    Standard = "STANDARD"
,    Incremental = "INCREMENTAL"
}

export enum AchievementConfigurationInitialStateEnum {
    InitialStateUnspecified = "INITIAL_STATE_UNSPECIFIED"
,    Hidden = "HIDDEN"
,    Revealed = "REVEALED"
}


// AchievementConfiguration
/** 
 * An achievement configuration resource.
**/
export class AchievementConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=achievementType" })
  achievementType?: AchievementConfigurationAchievementTypeEnum;

  @Metadata({ data: "json, name=draft" })
  draft?: AchievementConfigurationDetail;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=initialState" })
  initialState?: AchievementConfigurationInitialStateEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=published" })
  published?: AchievementConfigurationDetail;

  @Metadata({ data: "json, name=stepsToUnlock" })
  stepsToUnlock?: number;

  @Metadata({ data: "json, name=token" })
  token?: string;
}
