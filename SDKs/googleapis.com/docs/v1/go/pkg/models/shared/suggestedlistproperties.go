package shared

// SuggestedListProperties
// A suggested change to ListProperties.
type SuggestedListProperties struct {
	ListProperties                *ListProperties                `json:"listProperties,omitempty"`
	ListPropertiesSuggestionState *ListPropertiesSuggestionState `json:"listPropertiesSuggestionState,omitempty"`
}
