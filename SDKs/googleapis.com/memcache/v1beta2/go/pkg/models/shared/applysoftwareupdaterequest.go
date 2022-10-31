package shared



type ApplySoftwareUpdateRequest struct {
    ApplyAll *bool `json:"applyAll,omitempty"`
    NodeIds []string `json:"nodeIds,omitempty"`
    
}

