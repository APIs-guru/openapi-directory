import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AchievementConfigurationDetail } from "./achievementconfigurationdetail";


export enum AchievementConfigurationAchievementTypeEnum {
    AchievementTypeUnspecified = "ACHIEVEMENT_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Incremental = "INCREMENTAL"
}

export enum AchievementConfigurationInitialStateEnum {
    InitialStateUnspecified = "INITIAL_STATE_UNSPECIFIED",
    Hidden = "HIDDEN",
    Revealed = "REVEALED"
}


// AchievementConfiguration
/** 
 * An achievement configuration resource.
**/
export class AchievementConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=achievementType" })
  achievementType?: AchievementConfigurationAchievementTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=draft" })
  draft?: AchievementConfigurationDetail;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=initialState" })
  initialState?: AchievementConfigurationInitialStateEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: AchievementConfigurationDetail;

  @SpeakeasyMetadata({ data: "json, name=stepsToUnlock" })
  stepsToUnlock?: number;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
