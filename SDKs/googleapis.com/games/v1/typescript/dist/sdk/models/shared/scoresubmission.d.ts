import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to submit a score to leaderboards.
**/
export declare class ScoreSubmission extends SpeakeasyBase {
    kind?: string;
    leaderboardId?: string;
    score?: string;
    scoreTag?: string;
    signature?: string;
}
