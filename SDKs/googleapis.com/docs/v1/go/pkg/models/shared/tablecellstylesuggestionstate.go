package shared

// TableCellStyleSuggestionState
// A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
type TableCellStyleSuggestionState struct {
	BackgroundColorSuggested  *bool `json:"backgroundColorSuggested,omitempty"`
	BorderBottomSuggested     *bool `json:"borderBottomSuggested,omitempty"`
	BorderLeftSuggested       *bool `json:"borderLeftSuggested,omitempty"`
	BorderRightSuggested      *bool `json:"borderRightSuggested,omitempty"`
	BorderTopSuggested        *bool `json:"borderTopSuggested,omitempty"`
	ColumnSpanSuggested       *bool `json:"columnSpanSuggested,omitempty"`
	ContentAlignmentSuggested *bool `json:"contentAlignmentSuggested,omitempty"`
	PaddingBottomSuggested    *bool `json:"paddingBottomSuggested,omitempty"`
	PaddingLeftSuggested      *bool `json:"paddingLeftSuggested,omitempty"`
	PaddingRightSuggested     *bool `json:"paddingRightSuggested,omitempty"`
	PaddingTopSuggested       *bool `json:"paddingTopSuggested,omitempty"`
	RowSpanSuggested          *bool `json:"rowSpanSuggested,omitempty"`
}
