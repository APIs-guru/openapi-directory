package shared




type TableCellStyleContentAlignmentEnum string

const (
    TableCellStyleContentAlignmentEnumContentAlignmentUnspecified TableCellStyleContentAlignmentEnum = "CONTENT_ALIGNMENT_UNSPECIFIED"
TableCellStyleContentAlignmentEnumContentAlignmentUnsupported TableCellStyleContentAlignmentEnum = "CONTENT_ALIGNMENT_UNSUPPORTED"
TableCellStyleContentAlignmentEnumTop TableCellStyleContentAlignmentEnum = "TOP"
TableCellStyleContentAlignmentEnumMiddle TableCellStyleContentAlignmentEnum = "MIDDLE"
TableCellStyleContentAlignmentEnumBottom TableCellStyleContentAlignmentEnum = "BOTTOM"
)


type TableCellStyle struct {
    BackgroundColor *OptionalColor `json:"backgroundColor,omitempty"`
    BorderBottom *TableCellBorder `json:"borderBottom,omitempty"`
    BorderLeft *TableCellBorder `json:"borderLeft,omitempty"`
    BorderRight *TableCellBorder `json:"borderRight,omitempty"`
    BorderTop *TableCellBorder `json:"borderTop,omitempty"`
    ColumnSpan *int32 `json:"columnSpan,omitempty"`
    ContentAlignment *TableCellStyleContentAlignmentEnum `json:"contentAlignment,omitempty"`
    PaddingBottom *Dimension `json:"paddingBottom,omitempty"`
    PaddingLeft *Dimension `json:"paddingLeft,omitempty"`
    PaddingRight *Dimension `json:"paddingRight,omitempty"`
    PaddingTop *Dimension `json:"paddingTop,omitempty"`
    RowSpan *int32 `json:"rowSpan,omitempty"`
    
}

