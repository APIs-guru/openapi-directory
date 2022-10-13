package shared

type GoogleCloudRunV2ExecutionLaunchStageEnum string

const (
	GoogleCloudRunV2ExecutionLaunchStageEnumLaunchStageUnspecified GoogleCloudRunV2ExecutionLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
	GoogleCloudRunV2ExecutionLaunchStageEnumUnimplemented          GoogleCloudRunV2ExecutionLaunchStageEnum = "UNIMPLEMENTED"
	GoogleCloudRunV2ExecutionLaunchStageEnumPrelaunch              GoogleCloudRunV2ExecutionLaunchStageEnum = "PRELAUNCH"
	GoogleCloudRunV2ExecutionLaunchStageEnumEarlyAccess            GoogleCloudRunV2ExecutionLaunchStageEnum = "EARLY_ACCESS"
	GoogleCloudRunV2ExecutionLaunchStageEnumAlpha                  GoogleCloudRunV2ExecutionLaunchStageEnum = "ALPHA"
	GoogleCloudRunV2ExecutionLaunchStageEnumBeta                   GoogleCloudRunV2ExecutionLaunchStageEnum = "BETA"
	GoogleCloudRunV2ExecutionLaunchStageEnumGa                     GoogleCloudRunV2ExecutionLaunchStageEnum = "GA"
	GoogleCloudRunV2ExecutionLaunchStageEnumDeprecated             GoogleCloudRunV2ExecutionLaunchStageEnum = "DEPRECATED"
)

type GoogleCloudRunV2Execution struct {
	Annotations        map[string]string                         `json:"annotations"`
	CompletionTime     *string                                   `json:"completionTime"`
	Conditions         []GoogleCloudRunV2Condition               `json:"conditions"`
	CreateTime         *string                                   `json:"createTime"`
	DeleteTime         *string                                   `json:"deleteTime"`
	Etag               *string                                   `json:"etag"`
	ExpireTime         *string                                   `json:"expireTime"`
	FailedCount        *int32                                    `json:"failedCount"`
	Generation         *string                                   `json:"generation"`
	Job                *string                                   `json:"job"`
	Labels             map[string]string                         `json:"labels"`
	LaunchStage        *GoogleCloudRunV2ExecutionLaunchStageEnum `json:"launchStage"`
	Name               *string                                   `json:"name"`
	ObservedGeneration *string                                   `json:"observedGeneration"`
	Parallelism        *int32                                    `json:"parallelism"`
	Reconciling        *bool                                     `json:"reconciling"`
	RunningCount       *int32                                    `json:"runningCount"`
	StartTime          *string                                   `json:"startTime"`
	SucceededCount     *int32                                    `json:"succeededCount"`
	TaskCount          *int32                                    `json:"taskCount"`
	Template           *GoogleCloudRunV2TaskTemplate             `json:"template"`
	UID                *string                                   `json:"uid"`
	UpdateTime         *string                                   `json:"updateTime"`
}
