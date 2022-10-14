package shared

type GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum string

const (
	GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnumTargetResourceUnspecified GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum = "TARGET_RESOURCE_UNSPECIFIED"
	GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnumOrgUnit                   GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum = "ORG_UNIT"
	GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnumGroup                     GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum = "GROUP"
)

type GoogleChromePolicyVersionsV1PolicySchema struct {
	AccessRestrictions       []string                                                           `json:"accessRestrictions,omitempty"`
	AdditionalTargetKeyNames []GoogleChromePolicyVersionsV1AdditionalTargetKeyName              `json:"additionalTargetKeyNames,omitempty"`
	CategoryTitle            *string                                                            `json:"categoryTitle,omitempty"`
	Definition               *Proto2FileDescriptorProto                                         `json:"definition,omitempty"`
	FieldDescriptions        []GoogleChromePolicyVersionsV1PolicySchemaFieldDescription         `json:"fieldDescriptions,omitempty"`
	Name                     *string                                                            `json:"name,omitempty"`
	Notices                  []GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription        `json:"notices,omitempty"`
	PolicyAPILifecycle       *ChromeCrosDpanelAutosettingsProtoPolicyAPILifecycle               `json:"policyApiLifecycle,omitempty"`
	PolicyAPILifeycle        *ChromeCrosDpanelAutosettingsProtoPolicyAPILifecycle               `json:"policyApiLifeycle,omitempty"`
	PolicyDescription        *string                                                            `json:"policyDescription,omitempty"`
	SchemaName               *string                                                            `json:"schemaName,omitempty"`
	SupportURI               *string                                                            `json:"supportUri,omitempty"`
	ValidTargetResources     []GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum `json:"validTargetResources,omitempty"`
}
