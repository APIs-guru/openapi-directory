package shared

// ListTraceSinksResponse
// Result returned from `ListTraceSinks`.
type ListTraceSinksResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Sinks         []TraceSink `json:"sinks,omitempty"`
}
