package shared

type Snippet struct {
	MatchRanges []MatchRange `json:"matchRanges"`
	Snippet     *string      `json:"snippet"`
}
