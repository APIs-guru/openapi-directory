package shared



type ListTraceSinksResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Sinks []TraceSink `json:"sinks,omitempty"`
    
}

