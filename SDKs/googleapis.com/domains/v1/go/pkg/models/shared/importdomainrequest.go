package shared



type ImportDomainRequest struct {
    DomainName *string `json:"domainName,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    
}

