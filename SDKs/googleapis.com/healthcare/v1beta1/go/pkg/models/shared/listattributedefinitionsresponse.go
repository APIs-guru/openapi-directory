package shared



type ListAttributeDefinitionsResponse struct {
    AttributeDefinitions []AttributeDefinition `json:"attributeDefinitions,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

