import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { ExecutionReference } from "./executionreference";
/**
 * JobStatus represents the current state of a Job.
**/
export declare class JobStatus extends SpeakeasyBase {
    conditions?: GoogleCloudRunV1Condition[];
    executionCount?: number;
    latestCreatedExecution?: ExecutionReference;
    observedGeneration?: number;
}
