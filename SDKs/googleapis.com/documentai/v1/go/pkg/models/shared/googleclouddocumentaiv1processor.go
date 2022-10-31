package shared




type GoogleCloudDocumentaiV1ProcessorStateEnum string

const (
    GoogleCloudDocumentaiV1ProcessorStateEnumStateUnspecified GoogleCloudDocumentaiV1ProcessorStateEnum = "STATE_UNSPECIFIED"
GoogleCloudDocumentaiV1ProcessorStateEnumEnabled GoogleCloudDocumentaiV1ProcessorStateEnum = "ENABLED"
GoogleCloudDocumentaiV1ProcessorStateEnumDisabled GoogleCloudDocumentaiV1ProcessorStateEnum = "DISABLED"
GoogleCloudDocumentaiV1ProcessorStateEnumEnabling GoogleCloudDocumentaiV1ProcessorStateEnum = "ENABLING"
GoogleCloudDocumentaiV1ProcessorStateEnumDisabling GoogleCloudDocumentaiV1ProcessorStateEnum = "DISABLING"
GoogleCloudDocumentaiV1ProcessorStateEnumCreating GoogleCloudDocumentaiV1ProcessorStateEnum = "CREATING"
GoogleCloudDocumentaiV1ProcessorStateEnumFailed GoogleCloudDocumentaiV1ProcessorStateEnum = "FAILED"
GoogleCloudDocumentaiV1ProcessorStateEnumDeleting GoogleCloudDocumentaiV1ProcessorStateEnum = "DELETING"
)


type GoogleCloudDocumentaiV1Processor struct {
    CreateTime *string `json:"createTime,omitempty"`
    DefaultProcessorVersion *string `json:"defaultProcessorVersion,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    KmsKeyName *string `json:"kmsKeyName,omitempty"`
    Name *string `json:"name,omitempty"`
    ProcessEndpoint *string `json:"processEndpoint,omitempty"`
    State *GoogleCloudDocumentaiV1ProcessorStateEnum `json:"state,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

