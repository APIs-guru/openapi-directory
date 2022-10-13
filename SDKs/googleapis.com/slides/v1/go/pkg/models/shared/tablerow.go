package shared

type TableRow struct {
	RowHeight          *Dimension          `json:"rowHeight"`
	TableCells         []TableCell         `json:"tableCells"`
	TableRowProperties *TableRowProperties `json:"tableRowProperties"`
}
