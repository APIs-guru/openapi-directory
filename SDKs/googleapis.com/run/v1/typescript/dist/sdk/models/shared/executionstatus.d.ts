import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
/**
 * ExecutionStatus represents the current state of an Execution.
**/
export declare class ExecutionStatus extends SpeakeasyBase {
    cancelledCount?: number;
    completionTime?: string;
    conditions?: GoogleCloudRunV1Condition[];
    failedCount?: number;
    logUri?: string;
    observedGeneration?: number;
    retriedCount?: number;
    runningCount?: number;
    startTime?: string;
    succeededCount?: number;
}
