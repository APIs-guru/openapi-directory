package shared



type ListConnectivityTestsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Resources []ConnectivityTest `json:"resources,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

