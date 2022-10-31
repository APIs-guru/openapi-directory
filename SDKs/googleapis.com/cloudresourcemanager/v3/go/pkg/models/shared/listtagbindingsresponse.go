package shared



type ListTagBindingsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TagBindings []TagBinding `json:"tagBindings,omitempty"`
    
}

