package shared

type PositionedObjectPositioningSuggestionState struct {
	LayoutSuggested     *bool `json:"layoutSuggested"`
	LeftOffsetSuggested *bool `json:"leftOffsetSuggested"`
	TopOffsetSuggested  *bool `json:"topOffsetSuggested"`
}
