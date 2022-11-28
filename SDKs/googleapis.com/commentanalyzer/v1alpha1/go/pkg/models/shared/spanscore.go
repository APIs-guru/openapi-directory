package shared

// SpanScore
// This is a single score for a given span of text.
type SpanScore struct {
	Begin *int32 `json:"begin,omitempty"`
	End   *int32 `json:"end,omitempty"`
	Score *Score `json:"score,omitempty"`
}
