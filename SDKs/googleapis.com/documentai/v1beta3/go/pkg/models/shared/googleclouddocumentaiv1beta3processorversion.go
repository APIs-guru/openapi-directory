package shared




type GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum string

const (
    GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumStateUnspecified GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "STATE_UNSPECIFIED"
GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumDeployed GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "DEPLOYED"
GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumDeploying GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "DEPLOYING"
GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumUndeployed GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "UNDEPLOYED"
GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumUndeploying GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "UNDEPLOYING"
GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumCreating GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "CREATING"
GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumDeleting GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "DELETING"
GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumFailed GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "FAILED"
)


type GoogleCloudDocumentaiV1beta3ProcessorVersion struct {
    CreateTime *string `json:"createTime,omitempty"`
    DeprecationInfo *GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo `json:"deprecationInfo,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    GoogleManaged *bool `json:"googleManaged,omitempty"`
    KmsKeyName *string `json:"kmsKeyName,omitempty"`
    KmsKeyVersionName *string `json:"kmsKeyVersionName,omitempty"`
    Name *string `json:"name,omitempty"`
    State *GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum `json:"state,omitempty"`
    
}

