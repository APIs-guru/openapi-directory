package shared

// PlayerScoreSubmissionList
// A list of score submission requests.
type PlayerScoreSubmissionList struct {
	Kind   *string           `json:"kind,omitempty"`
	Scores []ScoreSubmission `json:"scores,omitempty"`
}
