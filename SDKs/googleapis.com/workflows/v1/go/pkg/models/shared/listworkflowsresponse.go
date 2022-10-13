package shared

type ListWorkflowsResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	Unreachable   []string   `json:"unreachable"`
	Workflows     []Workflow `json:"workflows"`
}
