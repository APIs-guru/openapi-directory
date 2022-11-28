package shared

// MatchRange
// Matched range of a snippet [start, end).
type MatchRange struct {
	End   *int32 `json:"end,omitempty"`
	Start *int32 `json:"start,omitempty"`
}
