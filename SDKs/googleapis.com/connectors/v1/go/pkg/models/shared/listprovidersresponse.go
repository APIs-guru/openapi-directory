package shared



type ListProvidersResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Providers []Provider `json:"providers,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

