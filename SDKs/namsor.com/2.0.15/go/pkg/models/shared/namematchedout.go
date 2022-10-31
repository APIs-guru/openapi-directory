package shared

type NameMatchedOut struct {
	ID          *string  `json:"id,omitempty"`
	MatchStatus *string  `json:"matchStatus,omitempty"`
	Score       *float64 `json:"score,omitempty"`
	Script      *string  `json:"script,omitempty"`
}
