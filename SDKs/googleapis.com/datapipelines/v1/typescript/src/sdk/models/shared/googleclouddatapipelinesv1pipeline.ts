import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1ScheduleSpec } from "./googleclouddatapipelinesv1schedulespec";
import { GoogleCloudDatapipelinesV1Workload } from "./googleclouddatapipelinesv1workload";

export enum GoogleCloudDatapipelinesV1PipelineStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    StateResuming = "STATE_RESUMING"
,    StateActive = "STATE_ACTIVE"
,    StateStopping = "STATE_STOPPING"
,    StateArchived = "STATE_ARCHIVED"
,    StatePaused = "STATE_PAUSED"
}

export enum GoogleCloudDatapipelinesV1PipelineTypeEnum {
    PipelineTypeUnspecified = "PIPELINE_TYPE_UNSPECIFIED"
,    PipelineTypeBatch = "PIPELINE_TYPE_BATCH"
,    PipelineTypeStreaming = "PIPELINE_TYPE_STREAMING"
}


// GoogleCloudDatapipelinesV1Pipeline
/** 
 * The main pipeline entity and all the necessary metadata for launching and managing linked jobs.
**/
export class GoogleCloudDatapipelinesV1Pipeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=jobCount" })
  jobCount?: number;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pipelineSources" })
  pipelineSources?: Map<string, string>;

  @Metadata({ data: "json, name=scheduleInfo" })
  scheduleInfo?: GoogleCloudDatapipelinesV1ScheduleSpec;

  @Metadata({ data: "json, name=schedulerServiceAccountEmail" })
  schedulerServiceAccountEmail?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDatapipelinesV1PipelineStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDatapipelinesV1PipelineTypeEnum;

  @Metadata({ data: "json, name=workload" })
  workload?: GoogleCloudDatapipelinesV1Workload;
}
