package shared

type BatchWriteSpansRequest struct {
	Spans []Span `json:"spans,omitempty"`
}
