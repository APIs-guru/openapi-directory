package shared

type QueryjobProjectResults struct {
	Columns []string             `json:"columns"`
	Data    [][]QueryResultEntry `json:"data"`
	Next    *string              `json:"next"`
	Project *Project             `json:"project"`
}
