package shared

type QueryResponse struct {
	ColumnHeaders []ResultTableColumnHeader `json:"columnHeaders"`
	Errors        *Errors                   `json:"errors"`
	Kind          *string                   `json:"kind"`
	Rows          [][]interface{}           `json:"rows"`
}
