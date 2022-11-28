import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScoresResetMultipleForAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=leaderboard_ids" })
  leaderboardIds?: string[];
}
