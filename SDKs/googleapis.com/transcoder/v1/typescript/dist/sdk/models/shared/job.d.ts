import { SpeakeasyBase } from "../../../internal/utils";
import { JobConfig } from "./jobconfig";
import { Status } from "./status";
export declare enum JobStateEnum {
    ProcessingStateUnspecified = "PROCESSING_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * Transcoding job resource.
**/
export declare class Job extends SpeakeasyBase {
    config?: JobConfig;
    createTime?: string;
    endTime?: string;
    error?: Status;
    inputUri?: string;
    labels?: Map<string, string>;
    name?: string;
    outputUri?: string;
    startTime?: string;
    state?: JobStateEnum;
    templateId?: string;
    ttlAfterCompletionDays?: number;
}
/**
 * Transcoding job resource.
**/
export declare class JobInput extends SpeakeasyBase {
    config?: JobConfig;
    error?: Status;
    inputUri?: string;
    labels?: Map<string, string>;
    name?: string;
    outputUri?: string;
    templateId?: string;
    ttlAfterCompletionDays?: number;
}
