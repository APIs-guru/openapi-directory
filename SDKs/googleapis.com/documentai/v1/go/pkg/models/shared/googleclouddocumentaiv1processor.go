package shared

type GoogleCloudDocumentaiV1ProcessorStateEnum string

const (
	GoogleCloudDocumentaiV1ProcessorStateEnumStateUnspecified GoogleCloudDocumentaiV1ProcessorStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDocumentaiV1ProcessorStateEnumEnabled          GoogleCloudDocumentaiV1ProcessorStateEnum = "ENABLED"
	GoogleCloudDocumentaiV1ProcessorStateEnumDisabled         GoogleCloudDocumentaiV1ProcessorStateEnum = "DISABLED"
	GoogleCloudDocumentaiV1ProcessorStateEnumEnabling         GoogleCloudDocumentaiV1ProcessorStateEnum = "ENABLING"
	GoogleCloudDocumentaiV1ProcessorStateEnumDisabling        GoogleCloudDocumentaiV1ProcessorStateEnum = "DISABLING"
	GoogleCloudDocumentaiV1ProcessorStateEnumCreating         GoogleCloudDocumentaiV1ProcessorStateEnum = "CREATING"
	GoogleCloudDocumentaiV1ProcessorStateEnumFailed           GoogleCloudDocumentaiV1ProcessorStateEnum = "FAILED"
	GoogleCloudDocumentaiV1ProcessorStateEnumDeleting         GoogleCloudDocumentaiV1ProcessorStateEnum = "DELETING"
)

type GoogleCloudDocumentaiV1Processor struct {
	CreateTime              *string                                    `json:"createTime"`
	DefaultProcessorVersion *string                                    `json:"defaultProcessorVersion"`
	DisplayName             *string                                    `json:"displayName"`
	KmsKeyName              *string                                    `json:"kmsKeyName"`
	Name                    *string                                    `json:"name"`
	ProcessEndpoint         *string                                    `json:"processEndpoint"`
	State                   *GoogleCloudDocumentaiV1ProcessorStateEnum `json:"state"`
	Type                    *string                                    `json:"type"`
}
