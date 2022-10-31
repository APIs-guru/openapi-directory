package shared



type Deployment struct {
    Labels map[string]string `json:"labels,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    Target *string `json:"target,omitempty"`
    
}

