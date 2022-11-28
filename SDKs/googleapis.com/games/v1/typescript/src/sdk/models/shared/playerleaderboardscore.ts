import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LeaderboardScoreRank } from "./leaderboardscorerank";


export enum PlayerLeaderboardScoreTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}


// PlayerLeaderboardScore
/** 
 * A player leaderboard score object.
**/
export class PlayerLeaderboardScore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=friendsRank" })
  friendsRank?: LeaderboardScoreRank;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=leaderboard_id" })
  leaderboardId?: string;

  @SpeakeasyMetadata({ data: "json, name=publicRank" })
  publicRank?: LeaderboardScoreRank;

  @SpeakeasyMetadata({ data: "json, name=scoreString" })
  scoreString?: string;

  @SpeakeasyMetadata({ data: "json, name=scoreTag" })
  scoreTag?: string;

  @SpeakeasyMetadata({ data: "json, name=scoreValue" })
  scoreValue?: string;

  @SpeakeasyMetadata({ data: "json, name=socialRank" })
  socialRank?: LeaderboardScoreRank;

  @SpeakeasyMetadata({ data: "json, name=timeSpan" })
  timeSpan?: PlayerLeaderboardScoreTimeSpanEnum;

  @SpeakeasyMetadata({ data: "json, name=writeTimestamp" })
  writeTimestamp?: string;
}
