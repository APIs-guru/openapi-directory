package shared



type EmbeddedObjectBorderSuggestionState struct {
    ColorSuggested *bool `json:"colorSuggested,omitempty"`
    DashStyleSuggested *bool `json:"dashStyleSuggested,omitempty"`
    PropertyStateSuggested *bool `json:"propertyStateSuggested,omitempty"`
    WidthSuggested *bool `json:"widthSuggested,omitempty"`
    
}

