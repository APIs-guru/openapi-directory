package shared

type GoogleCloudRunV2JobLaunchStageEnum string

const (
	GoogleCloudRunV2JobLaunchStageEnumLaunchStageUnspecified GoogleCloudRunV2JobLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
	GoogleCloudRunV2JobLaunchStageEnumUnimplemented          GoogleCloudRunV2JobLaunchStageEnum = "UNIMPLEMENTED"
	GoogleCloudRunV2JobLaunchStageEnumPrelaunch              GoogleCloudRunV2JobLaunchStageEnum = "PRELAUNCH"
	GoogleCloudRunV2JobLaunchStageEnumEarlyAccess            GoogleCloudRunV2JobLaunchStageEnum = "EARLY_ACCESS"
	GoogleCloudRunV2JobLaunchStageEnumAlpha                  GoogleCloudRunV2JobLaunchStageEnum = "ALPHA"
	GoogleCloudRunV2JobLaunchStageEnumBeta                   GoogleCloudRunV2JobLaunchStageEnum = "BETA"
	GoogleCloudRunV2JobLaunchStageEnumGa                     GoogleCloudRunV2JobLaunchStageEnum = "GA"
	GoogleCloudRunV2JobLaunchStageEnumDeprecated             GoogleCloudRunV2JobLaunchStageEnum = "DEPRECATED"
)

type GoogleCloudRunV2Job struct {
	Annotations            map[string]string                    `json:"annotations,omitempty"`
	BinaryAuthorization    *GoogleCloudRunV2BinaryAuthorization `json:"binaryAuthorization,omitempty"`
	Client                 *string                              `json:"client,omitempty"`
	ClientVersion          *string                              `json:"clientVersion,omitempty"`
	Conditions             []GoogleCloudRunV2Condition          `json:"conditions,omitempty"`
	CreateTime             *string                              `json:"createTime,omitempty"`
	Creator                *string                              `json:"creator,omitempty"`
	DeleteTime             *string                              `json:"deleteTime,omitempty"`
	Etag                   *string                              `json:"etag,omitempty"`
	ExecutionCount         *int32                               `json:"executionCount,omitempty"`
	ExpireTime             *string                              `json:"expireTime,omitempty"`
	Generation             *string                              `json:"generation,omitempty"`
	Labels                 map[string]string                    `json:"labels,omitempty"`
	LastModifier           *string                              `json:"lastModifier,omitempty"`
	LatestCreatedExecution *GoogleCloudRunV2ExecutionReference  `json:"latestCreatedExecution,omitempty"`
	LaunchStage            *GoogleCloudRunV2JobLaunchStageEnum  `json:"launchStage,omitempty"`
	Name                   *string                              `json:"name,omitempty"`
	ObservedGeneration     *string                              `json:"observedGeneration,omitempty"`
	Reconciling            *bool                                `json:"reconciling,omitempty"`
	Template               *GoogleCloudRunV2ExecutionTemplate   `json:"template,omitempty"`
	TerminalCondition      *GoogleCloudRunV2Condition           `json:"terminalCondition,omitempty"`
	UID                    *string                              `json:"uid,omitempty"`
	UpdateTime             *string                              `json:"updateTime,omitempty"`
}
