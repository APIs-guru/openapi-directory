package shared

// ListWorkflowsResponse
// Response for the ListWorkflows method.
type ListWorkflowsResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Unreachable   []string   `json:"unreachable,omitempty"`
	Workflows     []Workflow `json:"workflows,omitempty"`
}
