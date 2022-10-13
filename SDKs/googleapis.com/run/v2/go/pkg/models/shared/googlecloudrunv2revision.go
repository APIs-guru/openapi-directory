package shared

type GoogleCloudRunV2RevisionExecutionEnvironmentEnum string

const (
	GoogleCloudRunV2RevisionExecutionEnvironmentEnumExecutionEnvironmentUnspecified GoogleCloudRunV2RevisionExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
	GoogleCloudRunV2RevisionExecutionEnvironmentEnumExecutionEnvironmentGen1        GoogleCloudRunV2RevisionExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN1"
	GoogleCloudRunV2RevisionExecutionEnvironmentEnumExecutionEnvironmentGen2        GoogleCloudRunV2RevisionExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN2"
)

type GoogleCloudRunV2RevisionLaunchStageEnum string

const (
	GoogleCloudRunV2RevisionLaunchStageEnumLaunchStageUnspecified GoogleCloudRunV2RevisionLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
	GoogleCloudRunV2RevisionLaunchStageEnumUnimplemented          GoogleCloudRunV2RevisionLaunchStageEnum = "UNIMPLEMENTED"
	GoogleCloudRunV2RevisionLaunchStageEnumPrelaunch              GoogleCloudRunV2RevisionLaunchStageEnum = "PRELAUNCH"
	GoogleCloudRunV2RevisionLaunchStageEnumEarlyAccess            GoogleCloudRunV2RevisionLaunchStageEnum = "EARLY_ACCESS"
	GoogleCloudRunV2RevisionLaunchStageEnumAlpha                  GoogleCloudRunV2RevisionLaunchStageEnum = "ALPHA"
	GoogleCloudRunV2RevisionLaunchStageEnumBeta                   GoogleCloudRunV2RevisionLaunchStageEnum = "BETA"
	GoogleCloudRunV2RevisionLaunchStageEnumGa                     GoogleCloudRunV2RevisionLaunchStageEnum = "GA"
	GoogleCloudRunV2RevisionLaunchStageEnumDeprecated             GoogleCloudRunV2RevisionLaunchStageEnum = "DEPRECATED"
)

type GoogleCloudRunV2Revision struct {
	Annotations                   map[string]string                                 `json:"annotations"`
	Conditions                    []GoogleCloudRunV2Condition                       `json:"conditions"`
	Containers                    []GoogleCloudRunV2Container                       `json:"containers"`
	CreateTime                    *string                                           `json:"createTime"`
	DeleteTime                    *string                                           `json:"deleteTime"`
	EncryptionKey                 *string                                           `json:"encryptionKey"`
	Etag                          *string                                           `json:"etag"`
	ExecutionEnvironment          *GoogleCloudRunV2RevisionExecutionEnvironmentEnum `json:"executionEnvironment"`
	ExpireTime                    *string                                           `json:"expireTime"`
	Generation                    *string                                           `json:"generation"`
	Labels                        map[string]string                                 `json:"labels"`
	LaunchStage                   *GoogleCloudRunV2RevisionLaunchStageEnum          `json:"launchStage"`
	LogURI                        *string                                           `json:"logUri"`
	MaxInstanceRequestConcurrency *int32                                            `json:"maxInstanceRequestConcurrency"`
	Name                          *string                                           `json:"name"`
	ObservedGeneration            *string                                           `json:"observedGeneration"`
	Reconciling                   *bool                                             `json:"reconciling"`
	Scaling                       *GoogleCloudRunV2RevisionScaling                  `json:"scaling"`
	Service                       *string                                           `json:"service"`
	ServiceAccount                *string                                           `json:"serviceAccount"`
	Timeout                       *string                                           `json:"timeout"`
	UID                           *string                                           `json:"uid"`
	UpdateTime                    *string                                           `json:"updateTime"`
	Volumes                       []GoogleCloudRunV2Volume                          `json:"volumes"`
	VpcAccess                     *GoogleCloudRunV2VpcAccess                        `json:"vpcAccess"`
}
