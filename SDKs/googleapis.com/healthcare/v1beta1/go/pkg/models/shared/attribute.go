package shared

type Attribute struct {
	AttributeDefinitionID *string  `json:"attributeDefinitionId,omitempty"`
	Values                []string `json:"values,omitempty"`
}
