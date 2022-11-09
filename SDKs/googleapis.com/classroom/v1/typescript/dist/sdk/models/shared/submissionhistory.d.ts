import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GradeHistory } from "./gradehistory";
import { StateHistory } from "./statehistory";
/**
 * The history of the submission. This currently includes state and grade histories.
**/
export declare class SubmissionHistory extends SpeakeasyBase {
    gradeHistory?: GradeHistory;
    stateHistory?: StateHistory;
}
