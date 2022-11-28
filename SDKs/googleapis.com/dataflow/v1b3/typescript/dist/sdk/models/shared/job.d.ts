import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentInput } from "./environment";
import { JobExecutionInfo } from "./jobexecutioninfo";
import { JobMetadata } from "./jobmetadata";
import { PipelineDescription } from "./pipelinedescription";
import { ExecutionStageState } from "./executionstagestate";
import { Step } from "./step";
import { Environment } from "./environment";
export declare enum JobCurrentStateEnum {
    JobStateUnknown = "JOB_STATE_UNKNOWN",
    JobStateStopped = "JOB_STATE_STOPPED",
    JobStateRunning = "JOB_STATE_RUNNING",
    JobStateDone = "JOB_STATE_DONE",
    JobStateFailed = "JOB_STATE_FAILED",
    JobStateCancelled = "JOB_STATE_CANCELLED",
    JobStateUpdated = "JOB_STATE_UPDATED",
    JobStateDraining = "JOB_STATE_DRAINING",
    JobStateDrained = "JOB_STATE_DRAINED",
    JobStatePending = "JOB_STATE_PENDING",
    JobStateCancelling = "JOB_STATE_CANCELLING",
    JobStateQueued = "JOB_STATE_QUEUED",
    JobStateResourceCleaningUp = "JOB_STATE_RESOURCE_CLEANING_UP"
}
export declare enum JobRequestedStateEnum {
    JobStateUnknown = "JOB_STATE_UNKNOWN",
    JobStateStopped = "JOB_STATE_STOPPED",
    JobStateRunning = "JOB_STATE_RUNNING",
    JobStateDone = "JOB_STATE_DONE",
    JobStateFailed = "JOB_STATE_FAILED",
    JobStateCancelled = "JOB_STATE_CANCELLED",
    JobStateUpdated = "JOB_STATE_UPDATED",
    JobStateDraining = "JOB_STATE_DRAINING",
    JobStateDrained = "JOB_STATE_DRAINED",
    JobStatePending = "JOB_STATE_PENDING",
    JobStateCancelling = "JOB_STATE_CANCELLING",
    JobStateQueued = "JOB_STATE_QUEUED",
    JobStateResourceCleaningUp = "JOB_STATE_RESOURCE_CLEANING_UP"
}
export declare enum JobTypeEnum {
    JobTypeUnknown = "JOB_TYPE_UNKNOWN",
    JobTypeBatch = "JOB_TYPE_BATCH",
    JobTypeStreaming = "JOB_TYPE_STREAMING"
}
/**
 * Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API.
**/
export declare class JobInput extends SpeakeasyBase {
    clientRequestId?: string;
    createTime?: string;
    createdFromSnapshotId?: string;
    currentState?: JobCurrentStateEnum;
    currentStateTime?: string;
    environment?: EnvironmentInput;
    executionInfo?: JobExecutionInfo;
    id?: string;
    jobMetadata?: JobMetadata;
    labels?: Map<string, string>;
    location?: string;
    name?: string;
    pipelineDescription?: PipelineDescription;
    projectId?: string;
    replaceJobId?: string;
    replacedByJobId?: string;
    requestedState?: JobRequestedStateEnum;
    satisfiesPzs?: boolean;
    stageStates?: ExecutionStageState[];
    startTime?: string;
    steps?: Step[];
    stepsLocation?: string;
    tempFiles?: string[];
    transformNameMapping?: Map<string, string>;
    type?: JobTypeEnum;
}
/**
 * Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API.
**/
export declare class Job extends SpeakeasyBase {
    clientRequestId?: string;
    createTime?: string;
    createdFromSnapshotId?: string;
    currentState?: JobCurrentStateEnum;
    currentStateTime?: string;
    environment?: Environment;
    executionInfo?: JobExecutionInfo;
    id?: string;
    jobMetadata?: JobMetadata;
    labels?: Map<string, string>;
    location?: string;
    name?: string;
    pipelineDescription?: PipelineDescription;
    projectId?: string;
    replaceJobId?: string;
    replacedByJobId?: string;
    requestedState?: JobRequestedStateEnum;
    satisfiesPzs?: boolean;
    stageStates?: ExecutionStageState[];
    startTime?: string;
    steps?: Step[];
    stepsLocation?: string;
    tempFiles?: string[];
    transformNameMapping?: Map<string, string>;
    type?: JobTypeEnum;
}
