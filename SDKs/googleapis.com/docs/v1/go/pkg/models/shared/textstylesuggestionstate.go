package shared

type TextStyleSuggestionState struct {
	BackgroundColorSuggested    *bool `json:"backgroundColorSuggested"`
	BaselineOffsetSuggested     *bool `json:"baselineOffsetSuggested"`
	BoldSuggested               *bool `json:"boldSuggested"`
	FontSizeSuggested           *bool `json:"fontSizeSuggested"`
	ForegroundColorSuggested    *bool `json:"foregroundColorSuggested"`
	ItalicSuggested             *bool `json:"italicSuggested"`
	LinkSuggested               *bool `json:"linkSuggested"`
	SmallCapsSuggested          *bool `json:"smallCapsSuggested"`
	StrikethroughSuggested      *bool `json:"strikethroughSuggested"`
	UnderlineSuggested          *bool `json:"underlineSuggested"`
	WeightedFontFamilySuggested *bool `json:"weightedFontFamilySuggested"`
}
