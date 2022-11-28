import { SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";
export declare enum LeaderboardEntryTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}
/**
 * The Leaderboard Entry resource.
**/
export declare class LeaderboardEntry extends SpeakeasyBase {
    formattedScore?: string;
    formattedScoreRank?: string;
    kind?: string;
    player?: Player;
    scoreRank?: string;
    scoreTag?: string;
    scoreValue?: string;
    timeSpan?: LeaderboardEntryTimeSpanEnum;
    writeTimestampMillis?: string;
}
