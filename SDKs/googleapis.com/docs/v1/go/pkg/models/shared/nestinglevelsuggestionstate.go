package shared

type NestingLevelSuggestionState struct {
	BulletAlignmentSuggested *bool                     `json:"bulletAlignmentSuggested"`
	GlyphFormatSuggested     *bool                     `json:"glyphFormatSuggested"`
	GlyphSymbolSuggested     *bool                     `json:"glyphSymbolSuggested"`
	GlyphTypeSuggested       *bool                     `json:"glyphTypeSuggested"`
	IndentFirstLineSuggested *bool                     `json:"indentFirstLineSuggested"`
	IndentStartSuggested     *bool                     `json:"indentStartSuggested"`
	StartNumberSuggested     *bool                     `json:"startNumberSuggested"`
	TextStyleSuggestionState *TextStyleSuggestionState `json:"textStyleSuggestionState"`
}
