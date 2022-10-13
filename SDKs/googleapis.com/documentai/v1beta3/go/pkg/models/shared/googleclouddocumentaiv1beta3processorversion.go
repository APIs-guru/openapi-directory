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

type GoogleCloudDocumentaiV1beta3ProcessorVersion struct {
	CreateTime        *string                                                      `json:"createTime"`
	DeprecationInfo   *GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo `json:"deprecationInfo"`
	DisplayName       *string                                                      `json:"displayName"`
	GoogleManaged     *bool                                                        `json:"googleManaged"`
	KmsKeyName        *string                                                      `json:"kmsKeyName"`
	KmsKeyVersionName *string                                                      `json:"kmsKeyVersionName"`
	Name              *string                                                      `json:"name"`
	State             *GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum       `json:"state"`
}
