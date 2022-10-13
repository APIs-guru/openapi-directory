package shared

type TableCellStyleSuggestionState struct {
	BackgroundColorSuggested  *bool `json:"backgroundColorSuggested"`
	BorderBottomSuggested     *bool `json:"borderBottomSuggested"`
	BorderLeftSuggested       *bool `json:"borderLeftSuggested"`
	BorderRightSuggested      *bool `json:"borderRightSuggested"`
	BorderTopSuggested        *bool `json:"borderTopSuggested"`
	ColumnSpanSuggested       *bool `json:"columnSpanSuggested"`
	ContentAlignmentSuggested *bool `json:"contentAlignmentSuggested"`
	PaddingBottomSuggested    *bool `json:"paddingBottomSuggested"`
	PaddingLeftSuggested      *bool `json:"paddingLeftSuggested"`
	PaddingRightSuggested     *bool `json:"paddingRightSuggested"`
	PaddingTopSuggested       *bool `json:"paddingTopSuggested"`
	RowSpanSuggested          *bool `json:"rowSpanSuggested"`
}
