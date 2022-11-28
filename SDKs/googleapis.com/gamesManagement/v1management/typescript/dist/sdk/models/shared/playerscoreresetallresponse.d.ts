import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerScoreResetResponse } from "./playerscoreresetresponse";
/**
 * A list of leaderboard reset resources.
**/
export declare class PlayerScoreResetAllResponse extends SpeakeasyBase {
    kind?: string;
    results?: PlayerScoreResetResponse[];
}
