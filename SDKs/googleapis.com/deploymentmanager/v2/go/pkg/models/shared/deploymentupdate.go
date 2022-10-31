package shared



type DeploymentUpdate struct {
    Description *string `json:"description,omitempty"`
    Labels []DeploymentUpdateLabelEntry `json:"labels,omitempty"`
    Manifest *string `json:"manifest,omitempty"`
    
}

