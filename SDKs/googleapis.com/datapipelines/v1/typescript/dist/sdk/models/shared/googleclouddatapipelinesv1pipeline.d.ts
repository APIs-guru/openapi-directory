import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1ScheduleSpec } from "./googleclouddatapipelinesv1schedulespec";
import { GoogleCloudDatapipelinesV1Workload } from "./googleclouddatapipelinesv1workload";
export declare enum GoogleCloudDatapipelinesV1PipelineStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    StateResuming = "STATE_RESUMING",
    StateActive = "STATE_ACTIVE",
    StateStopping = "STATE_STOPPING",
    StateArchived = "STATE_ARCHIVED",
    StatePaused = "STATE_PAUSED"
}
export declare enum GoogleCloudDatapipelinesV1PipelineTypeEnum {
    PipelineTypeUnspecified = "PIPELINE_TYPE_UNSPECIFIED",
    PipelineTypeBatch = "PIPELINE_TYPE_BATCH",
    PipelineTypeStreaming = "PIPELINE_TYPE_STREAMING"
}
/**
 * The main pipeline entity and all the necessary metadata for launching and managing linked jobs.
**/
export declare class GoogleCloudDatapipelinesV1Pipeline extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    jobCount?: number;
    lastUpdateTime?: string;
    name?: string;
    pipelineSources?: Map<string, string>;
    scheduleInfo?: GoogleCloudDatapipelinesV1ScheduleSpec;
    schedulerServiceAccountEmail?: string;
    state?: GoogleCloudDatapipelinesV1PipelineStateEnum;
    type?: GoogleCloudDatapipelinesV1PipelineTypeEnum;
    workload?: GoogleCloudDatapipelinesV1Workload;
}
