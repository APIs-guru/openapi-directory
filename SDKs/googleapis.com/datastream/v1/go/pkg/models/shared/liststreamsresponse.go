package shared



type ListStreamsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Streams []Stream `json:"streams,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

