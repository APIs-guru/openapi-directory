package shared

type GoogleChromePolicyVersionsV1PolicySchemaFieldDescription struct {
	DefaultValue            *interface{}                                                         `json:"defaultValue"`
	Description             *string                                                              `json:"description"`
	Field                   *string                                                              `json:"field"`
	FieldDependencies       []GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies          `json:"fieldDependencies"`
	FieldDescription        *string                                                              `json:"fieldDescription"`
	InputConstraint         *string                                                              `json:"inputConstraint"`
	KnownValueDescriptions  []GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription `json:"knownValueDescriptions"`
	Name                    *string                                                              `json:"name"`
	NestedFieldDescriptions []GoogleChromePolicyVersionsV1PolicySchemaFieldDescription           `json:"nestedFieldDescriptions"`
	RequiredItems           []GoogleChromePolicyVersionsV1PolicySchemaRequiredItems              `json:"requiredItems"`
}
