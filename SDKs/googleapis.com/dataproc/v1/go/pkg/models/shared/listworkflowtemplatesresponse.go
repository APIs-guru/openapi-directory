package shared

type ListWorkflowTemplatesResponse struct {
	NextPageToken *string            `json:"nextPageToken"`
	Templates     []WorkflowTemplate `json:"templates"`
}
