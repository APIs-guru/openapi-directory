package shared

type Table struct {
	ColumnHeaders *Headers `json:"columnHeaders"`
	Name          *string  `json:"name"`
	RowHeaders    *Headers `json:"rowHeaders"`
	Rows          []Row    `json:"rows"`
}
