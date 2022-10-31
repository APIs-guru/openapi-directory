package shared



type TableRow struct {
    RowHeight *Dimension `json:"rowHeight,omitempty"`
    TableCells []TableCell `json:"tableCells,omitempty"`
    TableRowProperties *TableRowProperties `json:"tableRowProperties,omitempty"`
    
}

