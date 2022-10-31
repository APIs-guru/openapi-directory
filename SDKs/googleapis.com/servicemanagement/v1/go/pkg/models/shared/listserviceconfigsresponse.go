package shared



type ListServiceConfigsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ServiceConfigs []Service `json:"serviceConfigs,omitempty"`
    
}

