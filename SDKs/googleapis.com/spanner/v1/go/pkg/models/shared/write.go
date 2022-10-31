package shared

type Write struct {
	Columns []string        `json:"columns,omitempty"`
	Table   *string         `json:"table,omitempty"`
	Values  [][]interface{} `json:"values,omitempty"`
}
