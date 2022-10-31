package shared



type ListDatabaseInstancesResponse struct {
    Instances []DatabaseInstance `json:"instances,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

