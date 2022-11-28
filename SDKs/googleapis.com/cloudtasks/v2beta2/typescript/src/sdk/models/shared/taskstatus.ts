import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttemptStatus } from "./attemptstatus";



// TaskStatus
/** 
 * Status of the task.
**/
export class TaskStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attemptDispatchCount" })
  attemptDispatchCount?: number;

  @SpeakeasyMetadata({ data: "json, name=attemptResponseCount" })
  attemptResponseCount?: number;

  @SpeakeasyMetadata({ data: "json, name=firstAttemptStatus" })
  firstAttemptStatus?: AttemptStatus;

  @SpeakeasyMetadata({ data: "json, name=lastAttemptStatus" })
  lastAttemptStatus?: AttemptStatus;
}
