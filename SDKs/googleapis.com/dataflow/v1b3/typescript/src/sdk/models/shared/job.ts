import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Environment } from "./environment";
import { JobExecutionInfo } from "./jobexecutioninfo";
import { JobMetadata } from "./jobmetadata";
import { PipelineDescription } from "./pipelinedescription";
import { ExecutionStageState } from "./executionstagestate";
import { Step } from "./step";

export enum JobCurrentStateEnum {
    JobStateUnknown = "JOB_STATE_UNKNOWN"
,    JobStateStopped = "JOB_STATE_STOPPED"
,    JobStateRunning = "JOB_STATE_RUNNING"
,    JobStateDone = "JOB_STATE_DONE"
,    JobStateFailed = "JOB_STATE_FAILED"
,    JobStateCancelled = "JOB_STATE_CANCELLED"
,    JobStateUpdated = "JOB_STATE_UPDATED"
,    JobStateDraining = "JOB_STATE_DRAINING"
,    JobStateDrained = "JOB_STATE_DRAINED"
,    JobStatePending = "JOB_STATE_PENDING"
,    JobStateCancelling = "JOB_STATE_CANCELLING"
,    JobStateQueued = "JOB_STATE_QUEUED"
,    JobStateResourceCleaningUp = "JOB_STATE_RESOURCE_CLEANING_UP"
}

export enum JobRequestedStateEnum {
    JobStateUnknown = "JOB_STATE_UNKNOWN"
,    JobStateStopped = "JOB_STATE_STOPPED"
,    JobStateRunning = "JOB_STATE_RUNNING"
,    JobStateDone = "JOB_STATE_DONE"
,    JobStateFailed = "JOB_STATE_FAILED"
,    JobStateCancelled = "JOB_STATE_CANCELLED"
,    JobStateUpdated = "JOB_STATE_UPDATED"
,    JobStateDraining = "JOB_STATE_DRAINING"
,    JobStateDrained = "JOB_STATE_DRAINED"
,    JobStatePending = "JOB_STATE_PENDING"
,    JobStateCancelling = "JOB_STATE_CANCELLING"
,    JobStateQueued = "JOB_STATE_QUEUED"
,    JobStateResourceCleaningUp = "JOB_STATE_RESOURCE_CLEANING_UP"
}

export enum JobTypeEnum {
    JobTypeUnknown = "JOB_TYPE_UNKNOWN"
,    JobTypeBatch = "JOB_TYPE_BATCH"
,    JobTypeStreaming = "JOB_TYPE_STREAMING"
}


// Job
/** 
 * Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API.
**/
export class Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestId" })
  clientRequestId?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=createdFromSnapshotId" })
  createdFromSnapshotId?: string;

  @Metadata({ data: "json, name=currentState" })
  currentState?: JobCurrentStateEnum;

  @Metadata({ data: "json, name=currentStateTime" })
  currentStateTime?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: Environment;

  @Metadata({ data: "json, name=executionInfo" })
  executionInfo?: JobExecutionInfo;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=jobMetadata" })
  jobMetadata?: JobMetadata;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pipelineDescription" })
  pipelineDescription?: PipelineDescription;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=replaceJobId" })
  replaceJobId?: string;

  @Metadata({ data: "json, name=replacedByJobId" })
  replacedByJobId?: string;

  @Metadata({ data: "json, name=requestedState" })
  requestedState?: JobRequestedStateEnum;

  @Metadata({ data: "json, name=satisfiesPzs" })
  satisfiesPzs?: boolean;

  @Metadata({ data: "json, name=stageStates", elemType: shared.ExecutionStageState })
  stageStates?: ExecutionStageState[];

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=steps", elemType: shared.Step })
  steps?: Step[];

  @Metadata({ data: "json, name=stepsLocation" })
  stepsLocation?: string;

  @Metadata({ data: "json, name=tempFiles" })
  tempFiles?: string[];

  @Metadata({ data: "json, name=transformNameMapping" })
  transformNameMapping?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: JobTypeEnum;
}
