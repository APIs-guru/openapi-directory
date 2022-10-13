package shared

type GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum string

const (
	GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnumTargetResourceUnspecified GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum = "TARGET_RESOURCE_UNSPECIFIED"
	GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnumOrgUnit                   GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum = "ORG_UNIT"
	GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnumGroup                     GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum = "GROUP"
)

type GoogleChromePolicyVersionsV1PolicySchema struct {
	AccessRestrictions       []string                                                           `json:"accessRestrictions"`
	AdditionalTargetKeyNames []GoogleChromePolicyVersionsV1AdditionalTargetKeyName              `json:"additionalTargetKeyNames"`
	CategoryTitle            *string                                                            `json:"categoryTitle"`
	Definition               *Proto2FileDescriptorProto                                         `json:"definition"`
	FieldDescriptions        []GoogleChromePolicyVersionsV1PolicySchemaFieldDescription         `json:"fieldDescriptions"`
	Name                     *string                                                            `json:"name"`
	Notices                  []GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription        `json:"notices"`
	PolicyAPILifecycle       *ChromeCrosDpanelAutosettingsProtoPolicyAPILifecycle               `json:"policyApiLifecycle"`
	PolicyAPILifeycle        *ChromeCrosDpanelAutosettingsProtoPolicyAPILifecycle               `json:"policyApiLifeycle"`
	PolicyDescription        *string                                                            `json:"policyDescription"`
	SchemaName               *string                                                            `json:"schemaName"`
	SupportURI               *string                                                            `json:"supportUri"`
	ValidTargetResources     []GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum `json:"validTargetResources"`
}
