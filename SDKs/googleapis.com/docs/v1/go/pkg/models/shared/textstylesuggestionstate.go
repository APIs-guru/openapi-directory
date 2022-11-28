package shared

// TextStyleSuggestionState
// A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
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
