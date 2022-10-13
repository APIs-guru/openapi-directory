package shared

type LeaderboardScoreRank struct {
	FormattedNumScores *string `json:"formattedNumScores"`
	FormattedRank      *string `json:"formattedRank"`
	Kind               *string `json:"kind"`
	NumScores          *string `json:"numScores"`
	Rank               *string `json:"rank"`
}
