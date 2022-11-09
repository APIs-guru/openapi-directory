import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Player } from "./player";

export enum LeaderboardEntryTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED"
,    AllTime = "ALL_TIME"
,    Weekly = "WEEKLY"
,    Daily = "DAILY"
}


// LeaderboardEntry
/** 
 * The Leaderboard Entry resource.
**/
export class LeaderboardEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=formattedScore" })
  formattedScore?: string;

  @Metadata({ data: "json, name=formattedScoreRank" })
  formattedScoreRank?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=player" })
  player?: Player;

  @Metadata({ data: "json, name=scoreRank" })
  scoreRank?: string;

  @Metadata({ data: "json, name=scoreTag" })
  scoreTag?: string;

  @Metadata({ data: "json, name=scoreValue" })
  scoreValue?: string;

  @Metadata({ data: "json, name=timeSpan" })
  timeSpan?: LeaderboardEntryTimeSpanEnum;

  @Metadata({ data: "json, name=writeTimestampMillis" })
  writeTimestampMillis?: string;
}
