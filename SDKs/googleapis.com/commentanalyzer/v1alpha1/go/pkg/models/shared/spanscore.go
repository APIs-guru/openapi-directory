package shared

type SpanScore struct {
	Begin *int32 `json:"begin"`
	End   *int32 `json:"end"`
	Score *Score `json:"score"`
}
