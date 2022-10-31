package shared

type PlayerScoreListResponse struct {
	Kind            *string               `json:"kind,omitempty"`
	SubmittedScores []PlayerScoreResponse `json:"submittedScores,omitempty"`
}
