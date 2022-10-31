package shared



type GoogleChromePolicyVersionsV1PolicySchemaFieldDescription struct {
    DefaultValue *interface{} `json:"defaultValue,omitempty"`
    Description *string `json:"description,omitempty"`
    Field *string `json:"field,omitempty"`
    FieldDependencies []GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies `json:"fieldDependencies,omitempty"`
    FieldDescription *string `json:"fieldDescription,omitempty"`
    InputConstraint *string `json:"inputConstraint,omitempty"`
    KnownValueDescriptions []GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription `json:"knownValueDescriptions,omitempty"`
    Name *string `json:"name,omitempty"`
    NestedFieldDescriptions []GoogleChromePolicyVersionsV1PolicySchemaFieldDescription `json:"nestedFieldDescriptions,omitempty"`
    RequiredItems []GoogleChromePolicyVersionsV1PolicySchemaRequiredItems `json:"requiredItems,omitempty"`
    
}

