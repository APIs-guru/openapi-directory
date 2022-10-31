package shared



type ListWorkflowTemplatesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Templates []WorkflowTemplate `json:"templates,omitempty"`
    
}

