package shared

// ListPropertiesSuggestionState
// A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
type ListPropertiesSuggestionState struct {
	NestingLevelsSuggestionStates []NestingLevelSuggestionState `json:"nestingLevelsSuggestionStates,omitempty"`
}
