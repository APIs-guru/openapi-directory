package shared



type ListInstancesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Resources []Instance `json:"resources,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

