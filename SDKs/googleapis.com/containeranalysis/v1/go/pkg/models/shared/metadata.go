package shared



type Metadata struct {
    BuildFinishedOn *string `json:"buildFinishedOn,omitempty"`
    BuildInvocationID *string `json:"buildInvocationId,omitempty"`
    BuildStartedOn *string `json:"buildStartedOn,omitempty"`
    Completeness *Completeness `json:"completeness,omitempty"`
    Reproducible *bool `json:"reproducible,omitempty"`
    
}

