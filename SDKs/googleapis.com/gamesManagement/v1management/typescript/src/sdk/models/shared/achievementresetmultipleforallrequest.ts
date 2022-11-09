import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AchievementResetMultipleForAllRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=achievement_ids" })
  achievementIds?: string[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
