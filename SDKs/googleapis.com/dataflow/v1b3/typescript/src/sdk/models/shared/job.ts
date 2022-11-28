import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentInput } from "./environment";
import { JobExecutionInfo } from "./jobexecutioninfo";
import { JobMetadata } from "./jobmetadata";
import { PipelineDescription } from "./pipelinedescription";
import { ExecutionStageState } from "./executionstagestate";
import { Step } from "./step";
import { Environment } from "./environment";


export enum JobCurrentStateEnum {
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

export enum JobRequestedStateEnum {
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

export enum JobTypeEnum {
    JobTypeUnknown = "JOB_TYPE_UNKNOWN",
    JobTypeBatch = "JOB_TYPE_BATCH",
    JobTypeStreaming = "JOB_TYPE_STREAMING"
}


// JobInput
/** 
 * Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API.
**/
export class JobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestId" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=createdFromSnapshotId" })
  createdFromSnapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=currentState" })
  currentState?: JobCurrentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=currentStateTime" })
  currentStateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: EnvironmentInput;

  @SpeakeasyMetadata({ data: "json, name=executionInfo" })
  executionInfo?: JobExecutionInfo;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jobMetadata" })
  jobMetadata?: JobMetadata;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineDescription" })
  pipelineDescription?: PipelineDescription;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=replaceJobId" })
  replaceJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=replacedByJobId" })
  replacedByJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedState" })
  requestedState?: JobRequestedStateEnum;

  @SpeakeasyMetadata({ data: "json, name=satisfiesPzs" })
  satisfiesPzs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stageStates", elemType: ExecutionStageState })
  stageStates?: ExecutionStageState[];

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: Step })
  steps?: Step[];

  @SpeakeasyMetadata({ data: "json, name=stepsLocation" })
  stepsLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=tempFiles" })
  tempFiles?: string[];

  @SpeakeasyMetadata({ data: "json, name=transformNameMapping" })
  transformNameMapping?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: JobTypeEnum;
}


// Job
/** 
 * Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API.
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestId" })
  clientRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=createdFromSnapshotId" })
  createdFromSnapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=currentState" })
  currentState?: JobCurrentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=currentStateTime" })
  currentStateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Environment;

  @SpeakeasyMetadata({ data: "json, name=executionInfo" })
  executionInfo?: JobExecutionInfo;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jobMetadata" })
  jobMetadata?: JobMetadata;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineDescription" })
  pipelineDescription?: PipelineDescription;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=replaceJobId" })
  replaceJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=replacedByJobId" })
  replacedByJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedState" })
  requestedState?: JobRequestedStateEnum;

  @SpeakeasyMetadata({ data: "json, name=satisfiesPzs" })
  satisfiesPzs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stageStates", elemType: ExecutionStageState })
  stageStates?: ExecutionStageState[];

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: Step })
  steps?: Step[];

  @SpeakeasyMetadata({ data: "json, name=stepsLocation" })
  stepsLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=tempFiles" })
  tempFiles?: string[];

  @SpeakeasyMetadata({ data: "json, name=transformNameMapping" })
  transformNameMapping?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: JobTypeEnum;
}
