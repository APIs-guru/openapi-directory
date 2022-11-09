import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlayerScore } from "./playerscore";

export enum PlayerScoreResponseBeatenScoreTimeSpansEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED"
,    AllTime = "ALL_TIME"
,    Weekly = "WEEKLY"
,    Daily = "DAILY"
}


// PlayerScoreResponse
/** 
 * A list of leaderboard entry resources.
**/
export class PlayerScoreResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=beatenScoreTimeSpans" })
  beatenScoreTimeSpans?: PlayerScoreResponseBeatenScoreTimeSpansEnum[];

  @Metadata({ data: "json, name=formattedScore" })
  formattedScore?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=leaderboardId" })
  leaderboardId?: string;

  @Metadata({ data: "json, name=scoreTag" })
  scoreTag?: string;

  @Metadata({ data: "json, name=unbeatenScores", elemType: shared.PlayerScore })
  unbeatenScores?: PlayerScore[];
}
