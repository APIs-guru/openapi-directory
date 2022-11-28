package shared

// EmbeddedObjectBorderSuggestionState
// A mask that indicates which of the fields on the base EmbeddedObjectBorder have been changed in this suggestion. For any field set to true, there's a new suggested value.
type EmbeddedObjectBorderSuggestionState struct {
	ColorSuggested         *bool `json:"colorSuggested,omitempty"`
	DashStyleSuggested     *bool `json:"dashStyleSuggested,omitempty"`
	PropertyStateSuggested *bool `json:"propertyStateSuggested,omitempty"`
	WidthSuggested         *bool `json:"widthSuggested,omitempty"`
}
