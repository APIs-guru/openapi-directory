package shared

type ParagraphStyleSuggestionState struct {
	AlignmentSuggested           *bool                   `json:"alignmentSuggested"`
	AvoidWidowAndOrphanSuggested *bool                   `json:"avoidWidowAndOrphanSuggested"`
	BorderBetweenSuggested       *bool                   `json:"borderBetweenSuggested"`
	BorderBottomSuggested        *bool                   `json:"borderBottomSuggested"`
	BorderLeftSuggested          *bool                   `json:"borderLeftSuggested"`
	BorderRightSuggested         *bool                   `json:"borderRightSuggested"`
	BorderTopSuggested           *bool                   `json:"borderTopSuggested"`
	DirectionSuggested           *bool                   `json:"directionSuggested"`
	HeadingIDSuggested           *bool                   `json:"headingIdSuggested"`
	IndentEndSuggested           *bool                   `json:"indentEndSuggested"`
	IndentFirstLineSuggested     *bool                   `json:"indentFirstLineSuggested"`
	IndentStartSuggested         *bool                   `json:"indentStartSuggested"`
	KeepLinesTogetherSuggested   *bool                   `json:"keepLinesTogetherSuggested"`
	KeepWithNextSuggested        *bool                   `json:"keepWithNextSuggested"`
	LineSpacingSuggested         *bool                   `json:"lineSpacingSuggested"`
	NamedStyleTypeSuggested      *bool                   `json:"namedStyleTypeSuggested"`
	PageBreakBeforeSuggested     *bool                   `json:"pageBreakBeforeSuggested"`
	ShadingSuggestionState       *ShadingSuggestionState `json:"shadingSuggestionState"`
	SpaceAboveSuggested          *bool                   `json:"spaceAboveSuggested"`
	SpaceBelowSuggested          *bool                   `json:"spaceBelowSuggested"`
	SpacingModeSuggested         *bool                   `json:"spacingModeSuggested"`
}
