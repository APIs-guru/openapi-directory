package shared



type AccessReview struct {
    Group *string `json:"group,omitempty"`
    Name *string `json:"name,omitempty"`
    Ns *string `json:"ns,omitempty"`
    Resource *string `json:"resource,omitempty"`
    Subresource *string `json:"subresource,omitempty"`
    Verb *string `json:"verb,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

