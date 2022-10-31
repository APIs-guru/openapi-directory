package shared



type ListTopicsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Topics []Topic `json:"topics,omitempty"`
    
}

