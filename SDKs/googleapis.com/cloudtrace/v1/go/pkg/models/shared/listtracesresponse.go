package shared



type ListTracesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Traces []Trace `json:"traces,omitempty"`
    
}

