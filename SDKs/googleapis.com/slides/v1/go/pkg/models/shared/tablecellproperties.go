package shared




type TableCellPropertiesContentAlignmentEnum string

const (
    TableCellPropertiesContentAlignmentEnumContentAlignmentUnspecified TableCellPropertiesContentAlignmentEnum = "CONTENT_ALIGNMENT_UNSPECIFIED"
TableCellPropertiesContentAlignmentEnumContentAlignmentUnsupported TableCellPropertiesContentAlignmentEnum = "CONTENT_ALIGNMENT_UNSUPPORTED"
TableCellPropertiesContentAlignmentEnumTop TableCellPropertiesContentAlignmentEnum = "TOP"
TableCellPropertiesContentAlignmentEnumMiddle TableCellPropertiesContentAlignmentEnum = "MIDDLE"
TableCellPropertiesContentAlignmentEnumBottom TableCellPropertiesContentAlignmentEnum = "BOTTOM"
)


type TableCellProperties struct {
    ContentAlignment *TableCellPropertiesContentAlignmentEnum `json:"contentAlignment,omitempty"`
    TableCellBackgroundFill *TableCellBackgroundFill `json:"tableCellBackgroundFill,omitempty"`
    
}

