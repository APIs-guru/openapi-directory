package shared

type InsertTableRowRequest struct {
	InsertBelow       *bool              `json:"insertBelow"`
	TableCellLocation *TableCellLocation `json:"tableCellLocation"`
}
