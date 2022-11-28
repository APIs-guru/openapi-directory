package shared

// ListExecutionsResponse
// Response for the ListExecutions method.
type ListExecutionsResponse struct {
	Executions    []Execution `json:"executions,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
