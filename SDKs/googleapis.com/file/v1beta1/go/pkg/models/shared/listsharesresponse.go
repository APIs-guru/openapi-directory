package shared



type ListSharesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Shares []Share `json:"shares,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

