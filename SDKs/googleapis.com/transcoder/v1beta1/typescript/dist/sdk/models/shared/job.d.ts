import { SpeakeasyBase } from "../../../internal/utils";
import { JobConfig } from "./jobconfig";
import { OriginUri } from "./originuri";
import { Progress } from "./progress";
import { FailureDetail } from "./failuredetail";
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
export declare class JobInput extends SpeakeasyBase {
    config?: JobConfig;
    inputUri?: string;
    name?: string;
    originUri?: OriginUri;
    outputUri?: string;
    priority?: number;
    progress?: Progress;
    templateId?: string;
    ttlAfterCompletionDays?: number;
}
/**
 * Transcoding job resource.
**/
export declare class Job extends SpeakeasyBase {
    config?: JobConfig;
    createTime?: string;
    endTime?: string;
    failureDetails?: FailureDetail[];
    failureReason?: string;
    inputUri?: string;
    name?: string;
    originUri?: OriginUri;
    outputUri?: string;
    priority?: number;
    progress?: Progress;
    startTime?: string;
    state?: JobStateEnum;
    templateId?: string;
    ttlAfterCompletionDays?: number;
}
