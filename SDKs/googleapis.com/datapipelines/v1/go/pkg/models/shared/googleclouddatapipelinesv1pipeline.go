package shared




type GoogleCloudDatapipelinesV1PipelineStateEnum string

const (
    GoogleCloudDatapipelinesV1PipelineStateEnumStateUnspecified GoogleCloudDatapipelinesV1PipelineStateEnum = "STATE_UNSPECIFIED"
GoogleCloudDatapipelinesV1PipelineStateEnumStateResuming GoogleCloudDatapipelinesV1PipelineStateEnum = "STATE_RESUMING"
GoogleCloudDatapipelinesV1PipelineStateEnumStateActive GoogleCloudDatapipelinesV1PipelineStateEnum = "STATE_ACTIVE"
GoogleCloudDatapipelinesV1PipelineStateEnumStateStopping GoogleCloudDatapipelinesV1PipelineStateEnum = "STATE_STOPPING"
GoogleCloudDatapipelinesV1PipelineStateEnumStateArchived GoogleCloudDatapipelinesV1PipelineStateEnum = "STATE_ARCHIVED"
GoogleCloudDatapipelinesV1PipelineStateEnumStatePaused GoogleCloudDatapipelinesV1PipelineStateEnum = "STATE_PAUSED"
)



type GoogleCloudDatapipelinesV1PipelineTypeEnum string

const (
    GoogleCloudDatapipelinesV1PipelineTypeEnumPipelineTypeUnspecified GoogleCloudDatapipelinesV1PipelineTypeEnum = "PIPELINE_TYPE_UNSPECIFIED"
GoogleCloudDatapipelinesV1PipelineTypeEnumPipelineTypeBatch GoogleCloudDatapipelinesV1PipelineTypeEnum = "PIPELINE_TYPE_BATCH"
GoogleCloudDatapipelinesV1PipelineTypeEnumPipelineTypeStreaming GoogleCloudDatapipelinesV1PipelineTypeEnum = "PIPELINE_TYPE_STREAMING"
)


type GoogleCloudDatapipelinesV1Pipeline struct {
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    JobCount *int32 `json:"jobCount,omitempty"`
    LastUpdateTime *string `json:"lastUpdateTime,omitempty"`
    Name *string `json:"name,omitempty"`
    PipelineSources map[string]string `json:"pipelineSources,omitempty"`
    ScheduleInfo *GoogleCloudDatapipelinesV1ScheduleSpec `json:"scheduleInfo,omitempty"`
    SchedulerServiceAccountEmail *string `json:"schedulerServiceAccountEmail,omitempty"`
    State *GoogleCloudDatapipelinesV1PipelineStateEnum `json:"state,omitempty"`
    Type *GoogleCloudDatapipelinesV1PipelineTypeEnum `json:"type,omitempty"`
    Workload *GoogleCloudDatapipelinesV1Workload `json:"workload,omitempty"`
    
}

