package shared

type QueryjobProjectResults struct {
	Columns []string             `json:"columns,omitempty"`
	Data    [][]QueryResultEntry `json:"data,omitempty"`
	Next    *string              `json:"next,omitempty"`
	Project *Project             `json:"project,omitempty"`
}
