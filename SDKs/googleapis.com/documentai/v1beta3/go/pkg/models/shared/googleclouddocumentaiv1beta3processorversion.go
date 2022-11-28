package shared

type GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum string

const (
	GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumStateUnspecified GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumDeployed         GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "DEPLOYED"
	GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumDeploying        GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "DEPLOYING"
	GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumUndeployed       GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "UNDEPLOYED"
	GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumUndeploying      GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "UNDEPLOYING"
	GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumCreating         GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "CREATING"
	GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumDeleting         GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "DELETING"
	GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnumFailed           GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum = "FAILED"
)

// GoogleCloudDocumentaiV1beta3ProcessorVersion
// A processor version is an implementation of a processor. Each processor can have multiple versions, pre-trained by Google internally or up-trained by the customer. At a time, a processor can only have one default version version. So the processor's behavior (when processing documents) is defined by a default version
type GoogleCloudDocumentaiV1beta3ProcessorVersion struct {
	CreateTime        *string                                                      `json:"createTime,omitempty"`
	DeprecationInfo   *GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo `json:"deprecationInfo,omitempty"`
	DisplayName       *string                                                      `json:"displayName,omitempty"`
	DocumentSchema    *GoogleCloudDocumentaiV1beta3DocumentSchema                  `json:"documentSchema,omitempty"`
	GoogleManaged     *bool                                                        `json:"googleManaged,omitempty"`
	KmsKeyName        *string                                                      `json:"kmsKeyName,omitempty"`
	KmsKeyVersionName *string                                                      `json:"kmsKeyVersionName,omitempty"`
	Name              *string                                                      `json:"name,omitempty"`
	State             *GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum       `json:"state,omitempty"`
}
