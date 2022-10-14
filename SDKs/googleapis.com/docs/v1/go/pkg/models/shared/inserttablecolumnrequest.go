package shared

type InsertTableColumnRequest struct {
	InsertRight       *bool              `json:"insertRight,omitempty"`
	TableCellLocation *TableCellLocation `json:"tableCellLocation,omitempty"`
}
