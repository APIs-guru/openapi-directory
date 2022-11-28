package shared

// Table
// A PageElement kind representing a table.
type Table struct {
	Columns              *int32                  `json:"columns,omitempty"`
	HorizontalBorderRows []TableBorderRow        `json:"horizontalBorderRows,omitempty"`
	Rows                 *int32                  `json:"rows,omitempty"`
	TableColumns         []TableColumnProperties `json:"tableColumns,omitempty"`
	TableRows            []TableRow              `json:"tableRows,omitempty"`
	VerticalBorderRows   []TableBorderRow        `json:"verticalBorderRows,omitempty"`
}
