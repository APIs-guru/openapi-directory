import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";


export enum LeaderboardEntryTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}


// LeaderboardEntry
/** 
 * The Leaderboard Entry resource.
**/
export class LeaderboardEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formattedScore" })
  formattedScore?: string;

  @SpeakeasyMetadata({ data: "json, name=formattedScoreRank" })
  formattedScoreRank?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=player" })
  player?: Player;

  @SpeakeasyMetadata({ data: "json, name=scoreRank" })
  scoreRank?: string;

  @SpeakeasyMetadata({ data: "json, name=scoreTag" })
  scoreTag?: string;

  @SpeakeasyMetadata({ data: "json, name=scoreValue" })
  scoreValue?: string;

  @SpeakeasyMetadata({ data: "json, name=timeSpan" })
  timeSpan?: LeaderboardEntryTimeSpanEnum;

  @SpeakeasyMetadata({ data: "json, name=writeTimestampMillis" })
  writeTimestampMillis?: string;
}
