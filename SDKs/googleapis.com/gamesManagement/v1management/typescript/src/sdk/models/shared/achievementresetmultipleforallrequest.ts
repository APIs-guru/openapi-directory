import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AchievementResetMultipleForAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=achievement_ids" })
  achievementIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
