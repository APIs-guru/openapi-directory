package shared

// TableRow
// Properties and contents of each row in a table.
type TableRow struct {
	RowHeight          *Dimension          `json:"rowHeight,omitempty"`
	TableCells         []TableCell         `json:"tableCells,omitempty"`
	TableRowProperties *TableRowProperties `json:"tableRowProperties,omitempty"`
}
