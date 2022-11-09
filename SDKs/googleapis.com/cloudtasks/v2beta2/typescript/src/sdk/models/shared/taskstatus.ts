import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttemptStatus } from "./attemptstatus";
import { AttemptStatus } from "./attemptstatus";


// TaskStatus
/** 
 * Status of the task.
**/
export class TaskStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=attemptDispatchCount" })
  attemptDispatchCount?: number;

  @Metadata({ data: "json, name=attemptResponseCount" })
  attemptResponseCount?: number;

  @Metadata({ data: "json, name=firstAttemptStatus" })
  firstAttemptStatus?: AttemptStatus;

  @Metadata({ data: "json, name=lastAttemptStatus" })
  lastAttemptStatus?: AttemptStatus;
}
