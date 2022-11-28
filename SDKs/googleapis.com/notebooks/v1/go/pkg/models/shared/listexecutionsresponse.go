package shared

// ListExecutionsResponse
// Response for listing scheduled notebook executions
type ListExecutionsResponse struct {
	Executions    []Execution `json:"executions,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Unreachable   []string    `json:"unreachable,omitempty"`
}
