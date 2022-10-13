package shared

type GoogleCloudRunV2TaskExecutionEnvironmentEnum string

const (
	GoogleCloudRunV2TaskExecutionEnvironmentEnumExecutionEnvironmentUnspecified GoogleCloudRunV2TaskExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
	GoogleCloudRunV2TaskExecutionEnvironmentEnumExecutionEnvironmentGen1        GoogleCloudRunV2TaskExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN1"
	GoogleCloudRunV2TaskExecutionEnvironmentEnumExecutionEnvironmentGen2        GoogleCloudRunV2TaskExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN2"
)

type GoogleCloudRunV2TaskLaunchStageEnum string

const (
	GoogleCloudRunV2TaskLaunchStageEnumLaunchStageUnspecified GoogleCloudRunV2TaskLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
	GoogleCloudRunV2TaskLaunchStageEnumUnimplemented          GoogleCloudRunV2TaskLaunchStageEnum = "UNIMPLEMENTED"
	GoogleCloudRunV2TaskLaunchStageEnumPrelaunch              GoogleCloudRunV2TaskLaunchStageEnum = "PRELAUNCH"
	GoogleCloudRunV2TaskLaunchStageEnumEarlyAccess            GoogleCloudRunV2TaskLaunchStageEnum = "EARLY_ACCESS"
	GoogleCloudRunV2TaskLaunchStageEnumAlpha                  GoogleCloudRunV2TaskLaunchStageEnum = "ALPHA"
	GoogleCloudRunV2TaskLaunchStageEnumBeta                   GoogleCloudRunV2TaskLaunchStageEnum = "BETA"
	GoogleCloudRunV2TaskLaunchStageEnumGa                     GoogleCloudRunV2TaskLaunchStageEnum = "GA"
	GoogleCloudRunV2TaskLaunchStageEnumDeprecated             GoogleCloudRunV2TaskLaunchStageEnum = "DEPRECATED"
)

type GoogleCloudRunV2Task struct {
	Annotations          map[string]string                             `json:"annotations"`
	CompletionTime       *string                                       `json:"completionTime"`
	Conditions           []GoogleCloudRunV2Condition                   `json:"conditions"`
	Containers           []GoogleCloudRunV2Container                   `json:"containers"`
	CreateTime           *string                                       `json:"createTime"`
	DeleteTime           *string                                       `json:"deleteTime"`
	EncryptionKey        *string                                       `json:"encryptionKey"`
	Etag                 *string                                       `json:"etag"`
	Execution            *string                                       `json:"execution"`
	ExecutionEnvironment *GoogleCloudRunV2TaskExecutionEnvironmentEnum `json:"executionEnvironment"`
	ExpireTime           *string                                       `json:"expireTime"`
	Generation           *string                                       `json:"generation"`
	Index                *int32                                        `json:"index"`
	Job                  *string                                       `json:"job"`
	Labels               map[string]string                             `json:"labels"`
	LastAttemptResult    *GoogleCloudRunV2TaskAttemptResult            `json:"lastAttemptResult"`
	LaunchStage          *GoogleCloudRunV2TaskLaunchStageEnum          `json:"launchStage"`
	MaxRetries           *int32                                        `json:"maxRetries"`
	Name                 *string                                       `json:"name"`
	ObservedGeneration   *string                                       `json:"observedGeneration"`
	Reconciling          *bool                                         `json:"reconciling"`
	Retried              *int32                                        `json:"retried"`
	ServiceAccount       *string                                       `json:"serviceAccount"`
	StartTime            *string                                       `json:"startTime"`
	Timeout              *string                                       `json:"timeout"`
	UID                  *string                                       `json:"uid"`
	UpdateTime           *string                                       `json:"updateTime"`
	Volumes              []GoogleCloudRunV2Volume                      `json:"volumes"`
	VpcAccess            *GoogleCloudRunV2VpcAccess                    `json:"vpcAccess"`
}
