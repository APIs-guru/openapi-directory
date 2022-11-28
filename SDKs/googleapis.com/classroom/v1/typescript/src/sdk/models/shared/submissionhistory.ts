import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GradeHistory } from "./gradehistory";
import { StateHistory } from "./statehistory";



// SubmissionHistory
/** 
 * The history of the submission. This currently includes state and grade histories.
**/
export class SubmissionHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gradeHistory" })
  gradeHistory?: GradeHistory;

  @SpeakeasyMetadata({ data: "json, name=stateHistory" })
  stateHistory?: StateHistory;
}
