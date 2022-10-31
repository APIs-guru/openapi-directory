package shared



type ListHubsResponse struct {
    Hubs []Hub `json:"hubs,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

