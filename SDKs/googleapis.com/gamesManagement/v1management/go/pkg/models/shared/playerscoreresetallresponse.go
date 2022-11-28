package shared

// PlayerScoreResetAllResponse
// A list of leaderboard reset resources.
type PlayerScoreResetAllResponse struct {
	Kind    *string                    `json:"kind,omitempty"`
	Results []PlayerScoreResetResponse `json:"results,omitempty"`
}
