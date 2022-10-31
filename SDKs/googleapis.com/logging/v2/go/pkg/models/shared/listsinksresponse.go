package shared



type ListSinksResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Sinks []LogSink `json:"sinks,omitempty"`
    
}

