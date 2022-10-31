package shared



type PlayerScoreSubmissionList struct {
    Kind *string `json:"kind,omitempty"`
    Scores []ScoreSubmission `json:"scores,omitempty"`
    
}

