package shared

type PlayerScoreSubmissionList struct {
	Kind   *string           `json:"kind"`
	Scores []ScoreSubmission `json:"scores"`
}
