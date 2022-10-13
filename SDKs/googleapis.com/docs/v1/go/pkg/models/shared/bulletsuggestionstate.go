package shared

type BulletSuggestionState struct {
	ListIDSuggested          *bool                     `json:"listIdSuggested"`
	NestingLevelSuggested    *bool                     `json:"nestingLevelSuggested"`
	TextStyleSuggestionState *TextStyleSuggestionState `json:"textStyleSuggestionState"`
}
