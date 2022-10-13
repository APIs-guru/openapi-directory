package shared

type Grade struct {
	Correct  *bool     `json:"correct"`
	Feedback *Feedback `json:"feedback"`
	Score    *float64  `json:"score"`
}
