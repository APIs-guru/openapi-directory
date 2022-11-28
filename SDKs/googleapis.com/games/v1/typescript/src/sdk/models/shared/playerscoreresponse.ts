import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayerScore } from "./playerscore";


export enum PlayerScoreResponseBeatenScoreTimeSpansEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}


// PlayerScoreResponse
/** 
 * A list of leaderboard entry resources.
**/
export class PlayerScoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beatenScoreTimeSpans" })
  beatenScoreTimeSpans?: PlayerScoreResponseBeatenScoreTimeSpansEnum[];

  @SpeakeasyMetadata({ data: "json, name=formattedScore" })
  formattedScore?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=leaderboardId" })
  leaderboardId?: string;

  @SpeakeasyMetadata({ data: "json, name=scoreTag" })
  scoreTag?: string;

  @SpeakeasyMetadata({ data: "json, name=unbeatenScores", elemType: PlayerScore })
  unbeatenScores?: PlayerScore[];
}
