package shared



type ParagraphStyleSuggestionState struct {
    AlignmentSuggested *bool `json:"alignmentSuggested,omitempty"`
    AvoidWidowAndOrphanSuggested *bool `json:"avoidWidowAndOrphanSuggested,omitempty"`
    BorderBetweenSuggested *bool `json:"borderBetweenSuggested,omitempty"`
    BorderBottomSuggested *bool `json:"borderBottomSuggested,omitempty"`
    BorderLeftSuggested *bool `json:"borderLeftSuggested,omitempty"`
    BorderRightSuggested *bool `json:"borderRightSuggested,omitempty"`
    BorderTopSuggested *bool `json:"borderTopSuggested,omitempty"`
    DirectionSuggested *bool `json:"directionSuggested,omitempty"`
    HeadingIDSuggested *bool `json:"headingIdSuggested,omitempty"`
    IndentEndSuggested *bool `json:"indentEndSuggested,omitempty"`
    IndentFirstLineSuggested *bool `json:"indentFirstLineSuggested,omitempty"`
    IndentStartSuggested *bool `json:"indentStartSuggested,omitempty"`
    KeepLinesTogetherSuggested *bool `json:"keepLinesTogetherSuggested,omitempty"`
    KeepWithNextSuggested *bool `json:"keepWithNextSuggested,omitempty"`
    LineSpacingSuggested *bool `json:"lineSpacingSuggested,omitempty"`
    NamedStyleTypeSuggested *bool `json:"namedStyleTypeSuggested,omitempty"`
    PageBreakBeforeSuggested *bool `json:"pageBreakBeforeSuggested,omitempty"`
    ShadingSuggestionState *ShadingSuggestionState `json:"shadingSuggestionState,omitempty"`
    SpaceAboveSuggested *bool `json:"spaceAboveSuggested,omitempty"`
    SpaceBelowSuggested *bool `json:"spaceBelowSuggested,omitempty"`
    SpacingModeSuggested *bool `json:"spacingModeSuggested,omitempty"`
    
}

