package shared



type DNSPeering struct {
    Description *string `json:"description,omitempty"`
    Domain *string `json:"domain,omitempty"`
    Name *string `json:"name,omitempty"`
    TargetNetwork *string `json:"targetNetwork,omitempty"`
    TargetProject *string `json:"targetProject,omitempty"`
    
}

