package shared

// RowData
// Data about each cell in a row.
type RowData struct {
	Values []CellData `json:"values,omitempty"`
}
