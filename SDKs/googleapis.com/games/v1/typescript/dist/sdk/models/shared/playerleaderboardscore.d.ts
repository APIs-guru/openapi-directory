import { SpeakeasyBase } from "../../../internal/utils";
import { LeaderboardScoreRank } from "./leaderboardscorerank";
export declare enum PlayerLeaderboardScoreTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}
/**
 * A player leaderboard score object.
**/
export declare class PlayerLeaderboardScore extends SpeakeasyBase {
    friendsRank?: LeaderboardScoreRank;
    kind?: string;
    leaderboardId?: string;
    publicRank?: LeaderboardScoreRank;
    scoreString?: string;
    scoreTag?: string;
    scoreValue?: string;
    socialRank?: LeaderboardScoreRank;
    timeSpan?: PlayerLeaderboardScoreTimeSpanEnum;
    writeTimestamp?: string;
}
