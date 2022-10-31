package shared



type ListServiceBindingsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ServiceBindings []ServiceBinding `json:"serviceBindings,omitempty"`
    
}

