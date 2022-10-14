package shared

type GoogleCloudDocumentaiV1ProcessorVersionStateEnum string

const (
	GoogleCloudDocumentaiV1ProcessorVersionStateEnumStateUnspecified GoogleCloudDocumentaiV1ProcessorVersionStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDocumentaiV1ProcessorVersionStateEnumDeployed         GoogleCloudDocumentaiV1ProcessorVersionStateEnum = "DEPLOYED"
	GoogleCloudDocumentaiV1ProcessorVersionStateEnumDeploying        GoogleCloudDocumentaiV1ProcessorVersionStateEnum = "DEPLOYING"
	GoogleCloudDocumentaiV1ProcessorVersionStateEnumUndeployed       GoogleCloudDocumentaiV1ProcessorVersionStateEnum = "UNDEPLOYED"
	GoogleCloudDocumentaiV1ProcessorVersionStateEnumUndeploying      GoogleCloudDocumentaiV1ProcessorVersionStateEnum = "UNDEPLOYING"
	GoogleCloudDocumentaiV1ProcessorVersionStateEnumCreating         GoogleCloudDocumentaiV1ProcessorVersionStateEnum = "CREATING"
	GoogleCloudDocumentaiV1ProcessorVersionStateEnumDeleting         GoogleCloudDocumentaiV1ProcessorVersionStateEnum = "DELETING"
	GoogleCloudDocumentaiV1ProcessorVersionStateEnumFailed           GoogleCloudDocumentaiV1ProcessorVersionStateEnum = "FAILED"
)

type GoogleCloudDocumentaiV1ProcessorVersion struct {
	CreateTime        *string                                                 `json:"createTime,omitempty"`
	DeprecationInfo   *GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo `json:"deprecationInfo,omitempty"`
	DisplayName       *string                                                 `json:"displayName,omitempty"`
	GoogleManaged     *bool                                                   `json:"googleManaged,omitempty"`
	KmsKeyName        *string                                                 `json:"kmsKeyName,omitempty"`
	KmsKeyVersionName *string                                                 `json:"kmsKeyVersionName,omitempty"`
	Name              *string                                                 `json:"name,omitempty"`
	State             *GoogleCloudDocumentaiV1ProcessorVersionStateEnum       `json:"state,omitempty"`
}
