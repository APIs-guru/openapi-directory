import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerScore } from "./playerscore";
export declare enum PlayerScoreResponseBeatenScoreTimeSpansEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}
/**
 * A list of leaderboard entry resources.
**/
export declare class PlayerScoreResponse extends SpeakeasyBase {
    beatenScoreTimeSpans?: PlayerScoreResponseBeatenScoreTimeSpansEnum[];
    formattedScore?: string;
    kind?: string;
    leaderboardId?: string;
    scoreTag?: string;
    unbeatenScores?: PlayerScore[];
}
