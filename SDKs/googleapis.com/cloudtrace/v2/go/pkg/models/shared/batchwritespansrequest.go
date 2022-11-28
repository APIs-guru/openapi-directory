package shared

// BatchWriteSpansRequest
// The request message for the `BatchWriteSpans` method.
type BatchWriteSpansRequest struct {
	Spans []Span `json:"spans,omitempty"`
}
