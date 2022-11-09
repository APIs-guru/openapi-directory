import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LeaderboardScoreRank } from "./leaderboardscorerank";
import { LeaderboardScoreRank } from "./leaderboardscorerank";
import { LeaderboardScoreRank } from "./leaderboardscorerank";

export enum PlayerLeaderboardScoreTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED"
,    AllTime = "ALL_TIME"
,    Weekly = "WEEKLY"
,    Daily = "DAILY"
}


// PlayerLeaderboardScore
/** 
 * A player leaderboard score object.
**/
export class PlayerLeaderboardScore extends SpeakeasyBase {
  @Metadata({ data: "json, name=friendsRank" })
  friendsRank?: LeaderboardScoreRank;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=leaderboard_id" })
  leaderboardId?: string;

  @Metadata({ data: "json, name=publicRank" })
  publicRank?: LeaderboardScoreRank;

  @Metadata({ data: "json, name=scoreString" })
  scoreString?: string;

  @Metadata({ data: "json, name=scoreTag" })
  scoreTag?: string;

  @Metadata({ data: "json, name=scoreValue" })
  scoreValue?: string;

  @Metadata({ data: "json, name=socialRank" })
  socialRank?: LeaderboardScoreRank;

  @Metadata({ data: "json, name=timeSpan" })
  timeSpan?: PlayerLeaderboardScoreTimeSpanEnum;

  @Metadata({ data: "json, name=writeTimestamp" })
  writeTimestamp?: string;
}
