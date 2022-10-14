package shared

type TextStyleSuggestionState struct {
	BackgroundColorSuggested    *bool `json:"backgroundColorSuggested,omitempty"`
	BaselineOffsetSuggested     *bool `json:"baselineOffsetSuggested,omitempty"`
	BoldSuggested               *bool `json:"boldSuggested,omitempty"`
	FontSizeSuggested           *bool `json:"fontSizeSuggested,omitempty"`
	ForegroundColorSuggested    *bool `json:"foregroundColorSuggested,omitempty"`
	ItalicSuggested             *bool `json:"italicSuggested,omitempty"`
	LinkSuggested               *bool `json:"linkSuggested,omitempty"`
	SmallCapsSuggested          *bool `json:"smallCapsSuggested,omitempty"`
	StrikethroughSuggested      *bool `json:"strikethroughSuggested,omitempty"`
	UnderlineSuggested          *bool `json:"underlineSuggested,omitempty"`
	WeightedFontFamilySuggested *bool `json:"weightedFontFamilySuggested,omitempty"`
}
