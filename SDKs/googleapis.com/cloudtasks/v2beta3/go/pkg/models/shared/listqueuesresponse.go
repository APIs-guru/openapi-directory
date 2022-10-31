package shared



type ListQueuesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Queues []Queue `json:"queues,omitempty"`
    
}

