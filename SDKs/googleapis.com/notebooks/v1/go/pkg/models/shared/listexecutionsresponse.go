package shared

type ListExecutionsResponse struct {
	Executions    []Execution `json:"executions"`
	NextPageToken *string     `json:"nextPageToken"`
	Unreachable   []string    `json:"unreachable"`
}
