package shared




type GoogleCloudDocumentaiV1beta3ProcessorStateEnum string

const (
    GoogleCloudDocumentaiV1beta3ProcessorStateEnumStateUnspecified GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "STATE_UNSPECIFIED"
GoogleCloudDocumentaiV1beta3ProcessorStateEnumEnabled GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "ENABLED"
GoogleCloudDocumentaiV1beta3ProcessorStateEnumDisabled GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "DISABLED"
GoogleCloudDocumentaiV1beta3ProcessorStateEnumEnabling GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "ENABLING"
GoogleCloudDocumentaiV1beta3ProcessorStateEnumDisabling GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "DISABLING"
GoogleCloudDocumentaiV1beta3ProcessorStateEnumCreating GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "CREATING"
GoogleCloudDocumentaiV1beta3ProcessorStateEnumFailed GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "FAILED"
GoogleCloudDocumentaiV1beta3ProcessorStateEnumDeleting GoogleCloudDocumentaiV1beta3ProcessorStateEnum = "DELETING"
)


type GoogleCloudDocumentaiV1beta3Processor struct {
    CreateTime *string `json:"createTime,omitempty"`
    DefaultProcessorVersion *string `json:"defaultProcessorVersion,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    KmsKeyName *string `json:"kmsKeyName,omitempty"`
    Name *string `json:"name,omitempty"`
    ProcessEndpoint *string `json:"processEndpoint,omitempty"`
    State *GoogleCloudDocumentaiV1beta3ProcessorStateEnum `json:"state,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

