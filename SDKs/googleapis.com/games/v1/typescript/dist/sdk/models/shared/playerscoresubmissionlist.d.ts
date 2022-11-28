import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreSubmission } from "./scoresubmission";
/**
 * A list of score submission requests.
**/
export declare class PlayerScoreSubmissionList extends SpeakeasyBase {
    kind?: string;
    scores?: ScoreSubmission[];
}
