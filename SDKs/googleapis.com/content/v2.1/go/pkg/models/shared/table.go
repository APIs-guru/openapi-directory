package shared

type Table struct {
	ColumnHeaders *Headers `json:"columnHeaders,omitempty"`
	Name          *string  `json:"name,omitempty"`
	RowHeaders    *Headers `json:"rowHeaders,omitempty"`
	Rows          []Row    `json:"rows,omitempty"`
}
