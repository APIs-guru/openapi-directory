package shared

type TableCellStyleContentAlignmentEnum string

const (
	TableCellStyleContentAlignmentEnumContentAlignmentUnspecified TableCellStyleContentAlignmentEnum = "CONTENT_ALIGNMENT_UNSPECIFIED"
	TableCellStyleContentAlignmentEnumContentAlignmentUnsupported TableCellStyleContentAlignmentEnum = "CONTENT_ALIGNMENT_UNSUPPORTED"
	TableCellStyleContentAlignmentEnumTop                         TableCellStyleContentAlignmentEnum = "TOP"
	TableCellStyleContentAlignmentEnumMiddle                      TableCellStyleContentAlignmentEnum = "MIDDLE"
	TableCellStyleContentAlignmentEnumBottom                      TableCellStyleContentAlignmentEnum = "BOTTOM"
)

type TableCellStyle struct {
	BackgroundColor  *OptionalColor                      `json:"backgroundColor"`
	BorderBottom     *TableCellBorder                    `json:"borderBottom"`
	BorderLeft       *TableCellBorder                    `json:"borderLeft"`
	BorderRight      *TableCellBorder                    `json:"borderRight"`
	BorderTop        *TableCellBorder                    `json:"borderTop"`
	ColumnSpan       *int32                              `json:"columnSpan"`
	ContentAlignment *TableCellStyleContentAlignmentEnum `json:"contentAlignment"`
	PaddingBottom    *Dimension                          `json:"paddingBottom"`
	PaddingLeft      *Dimension                          `json:"paddingLeft"`
	PaddingRight     *Dimension                          `json:"paddingRight"`
	PaddingTop       *Dimension                          `json:"paddingTop"`
	RowSpan          *int32                              `json:"rowSpan"`
}
