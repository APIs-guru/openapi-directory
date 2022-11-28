import { SpeakeasyBase } from "../../../internal/utils";
import { AttemptStatus } from "./attemptstatus";
/**
 * Status of the task.
**/
export declare class TaskStatus extends SpeakeasyBase {
    attemptDispatchCount?: number;
    attemptResponseCount?: number;
    firstAttemptStatus?: AttemptStatus;
    lastAttemptStatus?: AttemptStatus;
}
