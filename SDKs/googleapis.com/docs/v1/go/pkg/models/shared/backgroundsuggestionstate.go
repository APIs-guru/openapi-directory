package shared

// BackgroundSuggestionState
// A mask that indicates which of the fields on the base Background have been changed in this suggestion. For any field set to true, the Backgound has a new suggested value.
type BackgroundSuggestionState struct {
	BackgroundColorSuggested *bool `json:"backgroundColorSuggested,omitempty"`
}
