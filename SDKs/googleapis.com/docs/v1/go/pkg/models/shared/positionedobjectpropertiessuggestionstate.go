package shared

type PositionedObjectPropertiesSuggestionState struct {
	EmbeddedObjectSuggestionState *EmbeddedObjectSuggestionState              `json:"embeddedObjectSuggestionState"`
	PositioningSuggestionState    *PositionedObjectPositioningSuggestionState `json:"positioningSuggestionState"`
}
