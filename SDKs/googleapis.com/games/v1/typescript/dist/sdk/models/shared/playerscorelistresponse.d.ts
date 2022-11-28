import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerScoreResponse } from "./playerscoreresponse";
/**
 * A list of score submission statuses.
**/
export declare class PlayerScoreListResponse extends SpeakeasyBase {
    kind?: string;
    submittedScores?: PlayerScoreResponse[];
}
