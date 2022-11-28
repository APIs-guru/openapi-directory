package shared

// NestingLevelSuggestionState
// A mask that indicates which of the fields on the base NestingLevel have been changed in this suggestion. For any field set to true, there's a new suggested value.
type NestingLevelSuggestionState struct {
	BulletAlignmentSuggested *bool                     `json:"bulletAlignmentSuggested,omitempty"`
	GlyphFormatSuggested     *bool                     `json:"glyphFormatSuggested,omitempty"`
	GlyphSymbolSuggested     *bool                     `json:"glyphSymbolSuggested,omitempty"`
	GlyphTypeSuggested       *bool                     `json:"glyphTypeSuggested,omitempty"`
	IndentFirstLineSuggested *bool                     `json:"indentFirstLineSuggested,omitempty"`
	IndentStartSuggested     *bool                     `json:"indentStartSuggested,omitempty"`
	StartNumberSuggested     *bool                     `json:"startNumberSuggested,omitempty"`
	TextStyleSuggestionState *TextStyleSuggestionState `json:"textStyleSuggestionState,omitempty"`
}
