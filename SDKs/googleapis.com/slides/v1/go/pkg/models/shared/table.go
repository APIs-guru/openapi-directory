package shared

type Table struct {
	Columns              *int32                  `json:"columns"`
	HorizontalBorderRows []TableBorderRow        `json:"horizontalBorderRows"`
	Rows                 *int32                  `json:"rows"`
	TableColumns         []TableColumnProperties `json:"tableColumns"`
	TableRows            []TableRow              `json:"tableRows"`
	VerticalBorderRows   []TableBorderRow        `json:"verticalBorderRows"`
}
