package shared

// BulletSuggestionState
// A mask that indicates which of the fields on the base Bullet have been changed in this suggestion. For any field set to true, there's a new suggested value.
type BulletSuggestionState struct {
	ListIDSuggested          *bool                     `json:"listIdSuggested,omitempty"`
	NestingLevelSuggested    *bool                     `json:"nestingLevelSuggested,omitempty"`
	TextStyleSuggestionState *TextStyleSuggestionState `json:"textStyleSuggestionState,omitempty"`
}
