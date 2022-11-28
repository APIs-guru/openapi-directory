package shared

// TableBorderRow
// Contents of each border row in a table.
type TableBorderRow struct {
	TableBorderCells []TableBorderCell `json:"tableBorderCells,omitempty"`
}
