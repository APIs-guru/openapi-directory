package shared



type ListDomainsResponse struct {
    Domains []Domain `json:"domains,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

