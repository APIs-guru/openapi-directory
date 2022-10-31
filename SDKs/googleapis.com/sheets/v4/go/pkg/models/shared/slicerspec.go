package shared

type SlicerSpecHorizontalAlignmentEnum string

const (
	SlicerSpecHorizontalAlignmentEnumHorizontalAlignUnspecified SlicerSpecHorizontalAlignmentEnum = "HORIZONTAL_ALIGN_UNSPECIFIED"
	SlicerSpecHorizontalAlignmentEnumLeft                       SlicerSpecHorizontalAlignmentEnum = "LEFT"
	SlicerSpecHorizontalAlignmentEnumCenter                     SlicerSpecHorizontalAlignmentEnum = "CENTER"
	SlicerSpecHorizontalAlignmentEnumRight                      SlicerSpecHorizontalAlignmentEnum = "RIGHT"
)

type SlicerSpec struct {
	ApplyToPivotTables   *bool                              `json:"applyToPivotTables,omitempty"`
	BackgroundColor      *Color                             `json:"backgroundColor,omitempty"`
	BackgroundColorStyle *ColorStyle                        `json:"backgroundColorStyle,omitempty"`
	ColumnIndex          *int32                             `json:"columnIndex,omitempty"`
	DataRange            *GridRange                         `json:"dataRange,omitempty"`
	FilterCriteria       *FilterCriteria                    `json:"filterCriteria,omitempty"`
	HorizontalAlignment  *SlicerSpecHorizontalAlignmentEnum `json:"horizontalAlignment,omitempty"`
	TextFormat           *TextFormat                        `json:"textFormat,omitempty"`
	Title                *string                            `json:"title,omitempty"`
}
