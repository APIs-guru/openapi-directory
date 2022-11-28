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

// GoogleCloudDocumentaiV1ProcessorVersion
// A processor version is an implementation of a processor. Each processor can have multiple versions, pre-trained by Google internally or up-trained by the customer. At a time, a processor can only have one default version version. So the processor's behavior (when processing documents) is defined by a default version
type GoogleCloudDocumentaiV1ProcessorVersion struct {
	CreateTime        *string                                                 `json:"createTime,omitempty"`
	DeprecationInfo   *GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo `json:"deprecationInfo,omitempty"`
	DisplayName       *string                                                 `json:"displayName,omitempty"`
	DocumentSchema    *GoogleCloudDocumentaiV1DocumentSchema                  `json:"documentSchema,omitempty"`
	GoogleManaged     *bool                                                   `json:"googleManaged,omitempty"`
	KmsKeyName        *string                                                 `json:"kmsKeyName,omitempty"`
	KmsKeyVersionName *string                                                 `json:"kmsKeyVersionName,omitempty"`
	Name              *string                                                 `json:"name,omitempty"`
	State             *GoogleCloudDocumentaiV1ProcessorVersionStateEnum       `json:"state,omitempty"`
}
