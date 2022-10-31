package shared



type AllowedDomainsSettings struct {
    Domains []string `json:"domains,omitempty"`
    Enable *bool `json:"enable,omitempty"`
    
}

