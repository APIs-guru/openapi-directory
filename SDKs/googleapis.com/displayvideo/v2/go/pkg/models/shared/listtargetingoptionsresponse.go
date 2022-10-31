package shared



type ListTargetingOptionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TargetingOptions []TargetingOption `json:"targetingOptions,omitempty"`
    
}

