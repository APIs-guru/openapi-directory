import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GradeHistory } from "./gradehistory";
import { StateHistory } from "./statehistory";


// SubmissionHistory
/** 
 * The history of the submission. This currently includes state and grade histories.
**/
export class SubmissionHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=gradeHistory" })
  gradeHistory?: GradeHistory;

  @Metadata({ data: "json, name=stateHistory" })
  stateHistory?: StateHistory;
}
