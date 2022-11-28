package shared

// ListTracesResponse
// The response message for the `ListTraces` method.
type ListTracesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Traces        []Trace `json:"traces,omitempty"`
}
