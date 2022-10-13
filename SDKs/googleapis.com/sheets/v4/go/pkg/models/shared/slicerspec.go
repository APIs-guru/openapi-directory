package shared

type SlicerSpecHorizontalAlignmentEnum string

const (
	SlicerSpecHorizontalAlignmentEnumHorizontalAlignUnspecified SlicerSpecHorizontalAlignmentEnum = "HORIZONTAL_ALIGN_UNSPECIFIED"
	SlicerSpecHorizontalAlignmentEnumLeft                       SlicerSpecHorizontalAlignmentEnum = "LEFT"
	SlicerSpecHorizontalAlignmentEnumCenter                     SlicerSpecHorizontalAlignmentEnum = "CENTER"
	SlicerSpecHorizontalAlignmentEnumRight                      SlicerSpecHorizontalAlignmentEnum = "RIGHT"
)

type SlicerSpec struct {
	ApplyToPivotTables   *bool                              `json:"applyToPivotTables"`
	BackgroundColor      *Color                             `json:"backgroundColor"`
	BackgroundColorStyle *ColorStyle                        `json:"backgroundColorStyle"`
	ColumnIndex          *int32                             `json:"columnIndex"`
	DataRange            *GridRange                         `json:"dataRange"`
	FilterCriteria       *FilterCriteria                    `json:"filterCriteria"`
	HorizontalAlignment  *SlicerSpecHorizontalAlignmentEnum `json:"horizontalAlignment"`
	TextFormat           *TextFormat                        `json:"textFormat"`
	Title                *string                            `json:"title"`
}
