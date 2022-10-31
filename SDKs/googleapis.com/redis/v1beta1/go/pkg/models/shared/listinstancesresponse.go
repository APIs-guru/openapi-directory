package shared



type ListInstancesResponse struct {
    Instances []Instance `json:"instances,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

