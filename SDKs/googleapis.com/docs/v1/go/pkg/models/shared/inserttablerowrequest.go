package shared

type InsertTableRowRequest struct {
	InsertBelow       *bool              `json:"insertBelow,omitempty"`
	TableCellLocation *TableCellLocation `json:"tableCellLocation,omitempty"`
}
