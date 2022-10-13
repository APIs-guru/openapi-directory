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
	Annotations            map[string]string                    `json:"annotations"`
	BinaryAuthorization    *GoogleCloudRunV2BinaryAuthorization `json:"binaryAuthorization"`
	Client                 *string                              `json:"client"`
	ClientVersion          *string                              `json:"clientVersion"`
	Conditions             []GoogleCloudRunV2Condition          `json:"conditions"`
	CreateTime             *string                              `json:"createTime"`
	Creator                *string                              `json:"creator"`
	DeleteTime             *string                              `json:"deleteTime"`
	Etag                   *string                              `json:"etag"`
	ExecutionCount         *int32                               `json:"executionCount"`
	ExpireTime             *string                              `json:"expireTime"`
	Generation             *string                              `json:"generation"`
	Labels                 map[string]string                    `json:"labels"`
	LastModifier           *string                              `json:"lastModifier"`
	LatestCreatedExecution *GoogleCloudRunV2ExecutionReference  `json:"latestCreatedExecution"`
	LaunchStage            *GoogleCloudRunV2JobLaunchStageEnum  `json:"launchStage"`
	Name                   *string                              `json:"name"`
	ObservedGeneration     *string                              `json:"observedGeneration"`
	Reconciling            *bool                                `json:"reconciling"`
	Template               *GoogleCloudRunV2ExecutionTemplate   `json:"template"`
	TerminalCondition      *GoogleCloudRunV2Condition           `json:"terminalCondition"`
	UID                    *string                              `json:"uid"`
	UpdateTime             *string                              `json:"updateTime"`
}
