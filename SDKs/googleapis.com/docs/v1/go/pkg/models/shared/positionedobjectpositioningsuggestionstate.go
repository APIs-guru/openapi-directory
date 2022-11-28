package shared

// PositionedObjectPositioningSuggestionState
// A mask that indicates which of the fields on the base PositionedObjectPositioning have been changed in this suggestion. For any field set to true, there's a new suggested value.
type PositionedObjectPositioningSuggestionState struct {
	LayoutSuggested     *bool `json:"layoutSuggested,omitempty"`
	LeftOffsetSuggested *bool `json:"leftOffsetSuggested,omitempty"`
	TopOffsetSuggested  *bool `json:"topOffsetSuggested,omitempty"`
}
