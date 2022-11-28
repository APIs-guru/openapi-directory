package shared

// LeaderboardScoreRank
// A score rank in a leaderboard.
type LeaderboardScoreRank struct {
	FormattedNumScores *string `json:"formattedNumScores,omitempty"`
	FormattedRank      *string `json:"formattedRank,omitempty"`
	Kind               *string `json:"kind,omitempty"`
	NumScores          *string `json:"numScores,omitempty"`
	Rank               *string `json:"rank,omitempty"`
}
