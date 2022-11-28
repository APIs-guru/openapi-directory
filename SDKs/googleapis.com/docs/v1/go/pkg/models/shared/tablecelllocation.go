package shared

// TableCellLocation
// Location of a single cell within a table.
type TableCellLocation struct {
	ColumnIndex        *int32    `json:"columnIndex,omitempty"`
	RowIndex           *int32    `json:"rowIndex,omitempty"`
	TableStartLocation *Location `json:"tableStartLocation,omitempty"`
}
