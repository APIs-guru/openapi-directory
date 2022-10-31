package shared



type NestingLevelSuggestionState struct {
    BulletAlignmentSuggested *bool `json:"bulletAlignmentSuggested,omitempty"`
    GlyphFormatSuggested *bool `json:"glyphFormatSuggested,omitempty"`
    GlyphSymbolSuggested *bool `json:"glyphSymbolSuggested,omitempty"`
    GlyphTypeSuggested *bool `json:"glyphTypeSuggested,omitempty"`
    IndentFirstLineSuggested *bool `json:"indentFirstLineSuggested,omitempty"`
    IndentStartSuggested *bool `json:"indentStartSuggested,omitempty"`
    StartNumberSuggested *bool `json:"startNumberSuggested,omitempty"`
    TextStyleSuggestionState *TextStyleSuggestionState `json:"textStyleSuggestionState,omitempty"`
    
}

