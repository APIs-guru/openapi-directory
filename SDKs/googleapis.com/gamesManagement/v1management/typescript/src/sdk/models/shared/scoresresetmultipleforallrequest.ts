import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScoresResetMultipleForAllRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=leaderboard_ids" })
  leaderboardIds?: string[];
}
