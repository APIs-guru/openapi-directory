package shared

type GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum string

const (
	GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnumExecutionEnvironmentUnspecified GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
	GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnumExecutionEnvironmentGen1        GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN1"
	GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnumExecutionEnvironmentGen2        GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN2"
)

type GoogleCloudRunV2TaskTemplate struct {
	Containers           []GoogleCloudRunV2Container                           `json:"containers"`
	EncryptionKey        *string                                               `json:"encryptionKey"`
	ExecutionEnvironment *GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum `json:"executionEnvironment"`
	MaxRetries           *int32                                                `json:"maxRetries"`
	ServiceAccount       *string                                               `json:"serviceAccount"`
	Timeout              *string                                               `json:"timeout"`
	Volumes              []GoogleCloudRunV2Volume                              `json:"volumes"`
	VpcAccess            *GoogleCloudRunV2VpcAccess                            `json:"vpcAccess"`
}
