import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerScoreTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}
/**
 * A player score.
**/
export declare class PlayerScore extends SpeakeasyBase {
    formattedScore?: string;
    kind?: string;
    score?: string;
    scoreTag?: string;
    timeSpan?: PlayerScoreTimeSpanEnum;
}
