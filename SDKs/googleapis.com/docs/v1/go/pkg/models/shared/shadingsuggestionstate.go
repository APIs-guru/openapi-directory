package shared

// ShadingSuggestionState
// A mask that indicates which of the fields on the base Shading have been changed in this suggested change. For any field set to true, there's a new suggested value.
type ShadingSuggestionState struct {
	BackgroundColorSuggested *bool `json:"backgroundColorSuggested,omitempty"`
}
