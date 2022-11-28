package shared

// SizeSuggestionState
// A mask that indicates which of the fields on the base Size have been changed in this suggestion. For any field set to true, the Size has a new suggested value.
type SizeSuggestionState struct {
	HeightSuggested *bool `json:"heightSuggested,omitempty"`
	WidthSuggested  *bool `json:"widthSuggested,omitempty"`
}
