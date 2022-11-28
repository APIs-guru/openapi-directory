package shared

// ListStreamsResponse
// Response message for listing streams.
type ListStreamsResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Streams       []Stream `json:"streams,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
