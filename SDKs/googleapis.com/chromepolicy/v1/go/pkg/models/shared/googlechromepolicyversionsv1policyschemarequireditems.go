package shared

// GoogleChromePolicyVersionsV1PolicySchemaRequiredItems
// The fields that will become required based on the value of this field.
type GoogleChromePolicyVersionsV1PolicySchemaRequiredItems struct {
	FieldConditions []string `json:"fieldConditions,omitempty"`
	RequiredFields  []string `json:"requiredFields,omitempty"`
}
