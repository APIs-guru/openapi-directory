package shared

type GoogleCloudDocumentaiV1beta3ProcessorStateEnum string

const (
	GoogleCloudDocumentaiV1beta3ProcessorStateEnumStateUnspecified GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDocumentaiV1beta3ProcessorStateEnumEnabled          GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "ENABLED"
	GoogleCloudDocumentaiV1beta3ProcessorStateEnumDisabled         GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "DISABLED"
	GoogleCloudDocumentaiV1beta3ProcessorStateEnumEnabling         GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "ENABLING"
	GoogleCloudDocumentaiV1beta3ProcessorStateEnumDisabling        GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "DISABLING"
	GoogleCloudDocumentaiV1beta3ProcessorStateEnumCreating         GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "CREATING"
	GoogleCloudDocumentaiV1beta3ProcessorStateEnumFailed           GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "FAILED"
	GoogleCloudDocumentaiV1beta3ProcessorStateEnumDeleting         GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "DELETING"
)

type GoogleCloudDocumentaiV1beta3Processor struct {
	CreateTime              *string                                         `json:"createTime"`
	DefaultProcessorVersion *string                                         `json:"defaultProcessorVersion"`
	DisplayName             *string                                         `json:"displayName"`
	KmsKeyName              *string                                         `json:"kmsKeyName"`
	Name                    *string                                         `json:"name"`
	ProcessEndpoint         *string                                         `json:"processEndpoint"`
	State                   *GoogleCloudDocumentaiV1beta3ProcessorStateEnum `json:"state"`
	Type                    *string                                         `json:"type"`
}
