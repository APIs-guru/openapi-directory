package shared

// TableBorderCell
// The properties of each border cell.
type TableBorderCell struct {
	Location              *TableCellLocation     `json:"location,omitempty"`
	TableBorderProperties *TableBorderProperties `json:"tableBorderProperties,omitempty"`
}
