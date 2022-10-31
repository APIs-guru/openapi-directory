package shared

type ListExecutionsResponse struct {
	Executions    []Execution `json:"executions,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
