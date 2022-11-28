package shared

// ListEventsResponse
// Contains a set of requested error events.
type ListEventsResponse struct {
	ErrorEvents    []ErrorEvent `json:"errorEvents,omitempty"`
	NextPageToken  *string      `json:"nextPageToken,omitempty"`
	TimeRangeBegin *string      `json:"timeRangeBegin,omitempty"`
}
