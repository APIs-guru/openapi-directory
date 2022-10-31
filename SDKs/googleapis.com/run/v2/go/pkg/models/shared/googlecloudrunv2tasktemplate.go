package shared




type GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum string

const (
    GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnumExecutionEnvironmentUnspecified GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnumExecutionEnvironmentGen1 GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN1"
GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnumExecutionEnvironmentGen2 GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN2"
)


type GoogleCloudRunV2TaskTemplate struct {
    Containers []GoogleCloudRunV2Container `json:"containers,omitempty"`
    EncryptionKey *string `json:"encryptionKey,omitempty"`
    ExecutionEnvironment *GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum `json:"executionEnvironment,omitempty"`
    MaxRetries *int32 `json:"maxRetries,omitempty"`
    ServiceAccount *string `json:"serviceAccount,omitempty"`
    Timeout *string `json:"timeout,omitempty"`
    Volumes []GoogleCloudRunV2Volume `json:"volumes,omitempty"`
    VpcAccess *GoogleCloudRunV2VpcAccess `json:"vpcAccess,omitempty"`
    
}

