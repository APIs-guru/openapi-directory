package shared

type NameMatchedOut struct {
	ID          *string  `json:"id"`
	MatchStatus *string  `json:"matchStatus"`
	Score       *float64 `json:"score"`
	Script      *string  `json:"script"`
}
