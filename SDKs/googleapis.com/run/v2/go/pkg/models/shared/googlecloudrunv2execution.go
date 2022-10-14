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
	Annotations        map[string]string                         `json:"annotations,omitempty"`
	CompletionTime     *string                                   `json:"completionTime,omitempty"`
	Conditions         []GoogleCloudRunV2Condition               `json:"conditions,omitempty"`
	CreateTime         *string                                   `json:"createTime,omitempty"`
	DeleteTime         *string                                   `json:"deleteTime,omitempty"`
	Etag               *string                                   `json:"etag,omitempty"`
	ExpireTime         *string                                   `json:"expireTime,omitempty"`
	FailedCount        *int32                                    `json:"failedCount,omitempty"`
	Generation         *string                                   `json:"generation,omitempty"`
	Job                *string                                   `json:"job,omitempty"`
	Labels             map[string]string                         `json:"labels,omitempty"`
	LaunchStage        *GoogleCloudRunV2ExecutionLaunchStageEnum `json:"launchStage,omitempty"`
	Name               *string                                   `json:"name,omitempty"`
	ObservedGeneration *string                                   `json:"observedGeneration,omitempty"`
	Parallelism        *int32                                    `json:"parallelism,omitempty"`
	Reconciling        *bool                                     `json:"reconciling,omitempty"`
	RunningCount       *int32                                    `json:"runningCount,omitempty"`
	StartTime          *string                                   `json:"startTime,omitempty"`
	SucceededCount     *int32                                    `json:"succeededCount,omitempty"`
	TaskCount          *int32                                    `json:"taskCount,omitempty"`
	Template           *GoogleCloudRunV2TaskTemplate             `json:"template,omitempty"`
	UID                *string                                   `json:"uid,omitempty"`
	UpdateTime         *string                                   `json:"updateTime,omitempty"`
}
