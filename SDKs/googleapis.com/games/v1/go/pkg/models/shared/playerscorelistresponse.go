package shared

type PlayerScoreListResponse struct {
	Kind            *string               `json:"kind"`
	SubmittedScores []PlayerScoreResponse `json:"submittedScores"`
}
