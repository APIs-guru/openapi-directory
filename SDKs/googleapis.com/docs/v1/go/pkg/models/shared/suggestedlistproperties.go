package shared

type SuggestedListProperties struct {
	ListProperties                *ListProperties                `json:"listProperties,omitempty"`
	ListPropertiesSuggestionState *ListPropertiesSuggestionState `json:"listPropertiesSuggestionState,omitempty"`
}
