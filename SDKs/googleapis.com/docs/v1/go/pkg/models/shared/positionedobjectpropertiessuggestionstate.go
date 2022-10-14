package shared

type PositionedObjectPropertiesSuggestionState struct {
	EmbeddedObjectSuggestionState *EmbeddedObjectSuggestionState              `json:"embeddedObjectSuggestionState,omitempty"`
	PositioningSuggestionState    *PositionedObjectPositioningSuggestionState `json:"positioningSuggestionState,omitempty"`
}
