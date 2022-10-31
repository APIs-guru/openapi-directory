package shared



type ObjectDefinition struct {
    Name *string `json:"name,omitempty"`
    Options *ObjectOptions `json:"options,omitempty"`
    PropertyDefinitions []PropertyDefinition `json:"propertyDefinitions,omitempty"`
    
}

