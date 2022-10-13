package shared

type GoogleCloudDatapipelinesV1PipelineStateEnum string

const (
	GoogleCloudDatapipelinesV1PipelineStateEnumStateUnspecified GoogleCloudDatapipelinesV1PipelineStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDatapipelinesV1PipelineStateEnumStateResuming    GoogleCloudDatapipelinesV1PipelineStateEnum = "STATE_RESUMING"
	GoogleCloudDatapipelinesV1PipelineStateEnumStateActive      GoogleCloudDatapipelinesV1PipelineStateEnum = "STATE_ACTIVE"
	GoogleCloudDatapipelinesV1PipelineStateEnumStateStopping    GoogleCloudDatapipelinesV1PipelineStateEnum = "STATE_STOPPING"
	GoogleCloudDatapipelinesV1PipelineStateEnumStateArchived    GoogleCloudDatapipelinesV1PipelineStateEnum = "STATE_ARCHIVED"
	GoogleCloudDatapipelinesV1PipelineStateEnumStatePaused      GoogleCloudDatapipelinesV1PipelineStateEnum = "STATE_PAUSED"
)

type GoogleCloudDatapipelinesV1PipelineTypeEnum string

const (
	GoogleCloudDatapipelinesV1PipelineTypeEnumPipelineTypeUnspecified GoogleCloudDatapipelinesV1PipelineTypeEnum = "PIPELINE_TYPE_UNSPECIFIED"
	GoogleCloudDatapipelinesV1PipelineTypeEnumPipelineTypeBatch       GoogleCloudDatapipelinesV1PipelineTypeEnum = "PIPELINE_TYPE_BATCH"
	GoogleCloudDatapipelinesV1PipelineTypeEnumPipelineTypeStreaming   GoogleCloudDatapipelinesV1PipelineTypeEnum = "PIPELINE_TYPE_STREAMING"
)

type GoogleCloudDatapipelinesV1Pipeline struct {
	CreateTime                   *string                                      `json:"createTime"`
	DisplayName                  *string                                      `json:"displayName"`
	JobCount                     *int32                                       `json:"jobCount"`
	LastUpdateTime               *string                                      `json:"lastUpdateTime"`
	Name                         *string                                      `json:"name"`
	PipelineSources              map[string]string                            `json:"pipelineSources"`
	ScheduleInfo                 *GoogleCloudDatapipelinesV1ScheduleSpec      `json:"scheduleInfo"`
	SchedulerServiceAccountEmail *string                                      `json:"schedulerServiceAccountEmail"`
	State                        *GoogleCloudDatapipelinesV1PipelineStateEnum `json:"state"`
	Type                         *GoogleCloudDatapipelinesV1PipelineTypeEnum  `json:"type"`
	Workload                     *GoogleCloudDatapipelinesV1Workload          `json:"workload"`
}
