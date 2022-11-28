package shared

// PlayerScoreListResponse
// A list of score submission statuses.
type PlayerScoreListResponse struct {
	Kind            *string               `json:"kind,omitempty"`
	SubmittedScores []PlayerScoreResponse `json:"submittedScores,omitempty"`
}
