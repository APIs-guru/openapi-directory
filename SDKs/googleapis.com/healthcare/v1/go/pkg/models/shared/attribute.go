package shared

type Attribute struct {
	AttributeDefinitionID *string  `json:"attributeDefinitionId"`
	Values                []string `json:"values"`
}
