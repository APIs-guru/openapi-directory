import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { TaskAttemptResult } from "./taskattemptresult";
/**
 * TaskStatus represents the status of a task.
**/
export declare class TaskStatus extends SpeakeasyBase {
    completionTime?: string;
    conditions?: GoogleCloudRunV1Condition[];
    index?: number;
    lastAttemptResult?: TaskAttemptResult;
    logUri?: string;
    observedGeneration?: number;
    retried?: number;
    startTime?: string;
}
