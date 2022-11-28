package shared

// Grade
// Grade information associated with a respondent's answer to a question.
type Grade struct {
	Correct  *bool     `json:"correct,omitempty"`
	Feedback *Feedback `json:"feedback,omitempty"`
	Score    *float64  `json:"score,omitempty"`
}
