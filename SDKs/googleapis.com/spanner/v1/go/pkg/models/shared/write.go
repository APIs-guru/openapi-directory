package shared

type Write struct {
	Columns []string        `json:"columns"`
	Table   *string         `json:"table"`
	Values  [][]interface{} `json:"values"`
}
