package shared

// InlineObjectPropertiesSuggestionState
// A mask that indicates which of the fields on the base InlineObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
type InlineObjectPropertiesSuggestionState struct {
	EmbeddedObjectSuggestionState *EmbeddedObjectSuggestionState `json:"embeddedObjectSuggestionState,omitempty"`
}
