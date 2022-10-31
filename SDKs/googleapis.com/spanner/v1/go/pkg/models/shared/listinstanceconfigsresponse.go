package shared



type ListInstanceConfigsResponse struct {
    InstanceConfigs []InstanceConfig `json:"instanceConfigs,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

