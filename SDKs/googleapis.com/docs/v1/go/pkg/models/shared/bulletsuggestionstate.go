package shared

type BulletSuggestionState struct {
	ListIDSuggested          *bool                     `json:"listIdSuggested,omitempty"`
	NestingLevelSuggested    *bool                     `json:"nestingLevelSuggested,omitempty"`
	TextStyleSuggestionState *TextStyleSuggestionState `json:"textStyleSuggestionState,omitempty"`
}
