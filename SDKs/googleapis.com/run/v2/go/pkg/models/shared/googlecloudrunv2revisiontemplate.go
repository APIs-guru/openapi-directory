package shared

type GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum string

const (
	GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnumExecutionEnvironmentUnspecified GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
	GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnumExecutionEnvironmentGen1        GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN1"
	GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnumExecutionEnvironmentGen2        GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN2"
)

type GoogleCloudRunV2RevisionTemplate struct {
	Annotations                   map[string]string                                         `json:"annotations"`
	Containers                    []GoogleCloudRunV2Container                               `json:"containers"`
	EncryptionKey                 *string                                                   `json:"encryptionKey"`
	ExecutionEnvironment          *GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum `json:"executionEnvironment"`
	Labels                        map[string]string                                         `json:"labels"`
	MaxInstanceRequestConcurrency *int32                                                    `json:"maxInstanceRequestConcurrency"`
	Revision                      *string                                                   `json:"revision"`
	Scaling                       *GoogleCloudRunV2RevisionScaling                          `json:"scaling"`
	ServiceAccount                *string                                                   `json:"serviceAccount"`
	Timeout                       *string                                                   `json:"timeout"`
	Volumes                       []GoogleCloudRunV2Volume                                  `json:"volumes"`
	VpcAccess                     *GoogleCloudRunV2VpcAccess                                `json:"vpcAccess"`
}
