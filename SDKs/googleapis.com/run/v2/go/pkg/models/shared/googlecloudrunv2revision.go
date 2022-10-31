package shared




type GoogleCloudRunV2RevisionExecutionEnvironmentEnum string

const (
    GoogleCloudRunV2RevisionExecutionEnvironmentEnumExecutionEnvironmentUnspecified GoogleCloudRunV2RevisionExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
GoogleCloudRunV2RevisionExecutionEnvironmentEnumExecutionEnvironmentGen1 GoogleCloudRunV2RevisionExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN1"
GoogleCloudRunV2RevisionExecutionEnvironmentEnumExecutionEnvironmentGen2 GoogleCloudRunV2RevisionExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN2"
)



type GoogleCloudRunV2RevisionLaunchStageEnum string

const (
    GoogleCloudRunV2RevisionLaunchStageEnumLaunchStageUnspecified GoogleCloudRunV2RevisionLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
GoogleCloudRunV2RevisionLaunchStageEnumUnimplemented GoogleCloudRunV2RevisionLaunchStageEnum = "UNIMPLEMENTED"
GoogleCloudRunV2RevisionLaunchStageEnumPrelaunch GoogleCloudRunV2RevisionLaunchStageEnum = "PRELAUNCH"
GoogleCloudRunV2RevisionLaunchStageEnumEarlyAccess GoogleCloudRunV2RevisionLaunchStageEnum = "EARLY_ACCESS"
GoogleCloudRunV2RevisionLaunchStageEnumAlpha GoogleCloudRunV2RevisionLaunchStageEnum = "ALPHA"
GoogleCloudRunV2RevisionLaunchStageEnumBeta GoogleCloudRunV2RevisionLaunchStageEnum = "BETA"
GoogleCloudRunV2RevisionLaunchStageEnumGa GoogleCloudRunV2RevisionLaunchStageEnum = "GA"
GoogleCloudRunV2RevisionLaunchStageEnumDeprecated GoogleCloudRunV2RevisionLaunchStageEnum = "DEPRECATED"
)


type GoogleCloudRunV2Revision struct {
    Annotations map[string]string `json:"annotations,omitempty"`
    Conditions []GoogleCloudRunV2Condition `json:"conditions,omitempty"`
    Containers []GoogleCloudRunV2Container `json:"containers,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DeleteTime *string `json:"deleteTime,omitempty"`
    EncryptionKey *string `json:"encryptionKey,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ExecutionEnvironment *GoogleCloudRunV2RevisionExecutionEnvironmentEnum `json:"executionEnvironment,omitempty"`
    ExpireTime *string `json:"expireTime,omitempty"`
    Generation *string `json:"generation,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    LaunchStage *GoogleCloudRunV2RevisionLaunchStageEnum `json:"launchStage,omitempty"`
    LogURI *string `json:"logUri,omitempty"`
    MaxInstanceRequestConcurrency *int32 `json:"maxInstanceRequestConcurrency,omitempty"`
    Name *string `json:"name,omitempty"`
    ObservedGeneration *string `json:"observedGeneration,omitempty"`
    Reconciling *bool `json:"reconciling,omitempty"`
    Scaling *GoogleCloudRunV2RevisionScaling `json:"scaling,omitempty"`
    Service *string `json:"service,omitempty"`
    ServiceAccount *string `json:"serviceAccount,omitempty"`
    Timeout *string `json:"timeout,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    Volumes []GoogleCloudRunV2Volume `json:"volumes,omitempty"`
    VpcAccess *GoogleCloudRunV2VpcAccess `json:"vpcAccess,omitempty"`
    
}

