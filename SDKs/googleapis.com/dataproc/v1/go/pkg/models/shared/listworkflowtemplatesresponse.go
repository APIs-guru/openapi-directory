package shared

// ListWorkflowTemplatesResponse
// A response to a request to list workflow templates in a project.
type ListWorkflowTemplatesResponse struct {
	NextPageToken *string            `json:"nextPageToken,omitempty"`
	Templates     []WorkflowTemplate `json:"templates,omitempty"`
}
