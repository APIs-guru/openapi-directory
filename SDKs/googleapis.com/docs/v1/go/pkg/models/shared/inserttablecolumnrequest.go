package shared

type InsertTableColumnRequest struct {
	InsertRight       *bool              `json:"insertRight"`
	TableCellLocation *TableCellLocation `json:"tableCellLocation"`
}
