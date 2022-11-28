package shared

type GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum string

const (
	GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnumExecutionEnvironmentUnspecified GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
	GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnumExecutionEnvironmentGen1        GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN1"
	GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnumExecutionEnvironmentGen2        GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN2"
)

// GoogleCloudRunV2RevisionTemplate
// RevisionTemplate describes the data a revision should have when created from a template.
type GoogleCloudRunV2RevisionTemplate struct {
	Annotations                   map[string]string                                         `json:"annotations,omitempty"`
	Containers                    []GoogleCloudRunV2Container                               `json:"containers,omitempty"`
	EncryptionKey                 *string                                                   `json:"encryptionKey,omitempty"`
	ExecutionEnvironment          *GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum `json:"executionEnvironment,omitempty"`
	Labels                        map[string]string                                         `json:"labels,omitempty"`
	MaxInstanceRequestConcurrency *int32                                                    `json:"maxInstanceRequestConcurrency,omitempty"`
	Revision                      *string                                                   `json:"revision,omitempty"`
	Scaling                       *GoogleCloudRunV2RevisionScaling                          `json:"scaling,omitempty"`
	ServiceAccount                *string                                                   `json:"serviceAccount,omitempty"`
	Timeout                       *string                                                   `json:"timeout,omitempty"`
	Volumes                       []GoogleCloudRunV2Volume                                  `json:"volumes,omitempty"`
	VpcAccess                     *GoogleCloudRunV2VpcAccess                                `json:"vpcAccess,omitempty"`
}
