package shared



type ListEventsResponse struct {
    ErrorEvents []ErrorEvent `json:"errorEvents,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TimeRangeBegin *string `json:"timeRangeBegin,omitempty"`
    
}

