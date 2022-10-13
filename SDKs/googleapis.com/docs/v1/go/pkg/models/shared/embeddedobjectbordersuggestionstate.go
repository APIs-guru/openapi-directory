package shared

type EmbeddedObjectBorderSuggestionState struct {
	ColorSuggested         *bool `json:"colorSuggested"`
	DashStyleSuggested     *bool `json:"dashStyleSuggested"`
	PropertyStateSuggested *bool `json:"propertyStateSuggested"`
	WidthSuggested         *bool `json:"widthSuggested"`
}
