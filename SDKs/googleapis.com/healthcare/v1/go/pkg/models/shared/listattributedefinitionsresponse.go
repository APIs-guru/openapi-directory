package shared

type ListAttributeDefinitionsResponse struct {
	AttributeDefinitions []AttributeDefinition `json:"attributeDefinitions"`
	NextPageToken        *string               `json:"nextPageToken"`
}
