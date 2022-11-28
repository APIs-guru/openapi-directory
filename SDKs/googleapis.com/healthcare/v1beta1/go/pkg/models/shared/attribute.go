package shared

// Attribute
// An attribute value for a Consent or User data mapping. Each Attribute must have a corresponding AttributeDefinition in the consent store that defines the default and allowed values.
type Attribute struct {
	AttributeDefinitionID *string  `json:"attributeDefinitionId,omitempty"`
	Values                []string `json:"values,omitempty"`
}
