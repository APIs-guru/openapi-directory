package shared

// PositionedObjectPropertiesSuggestionState
// A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
type PositionedObjectPropertiesSuggestionState struct {
	EmbeddedObjectSuggestionState *EmbeddedObjectSuggestionState              `json:"embeddedObjectSuggestionState,omitempty"`
	PositioningSuggestionState    *PositionedObjectPositioningSuggestionState `json:"positioningSuggestionState,omitempty"`
}
