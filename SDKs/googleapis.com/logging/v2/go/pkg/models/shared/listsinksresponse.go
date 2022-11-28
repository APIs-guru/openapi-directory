package shared

// ListSinksResponse
// Result returned from ListSinks.
type ListSinksResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Sinks         []LogSink `json:"sinks,omitempty"`
}
