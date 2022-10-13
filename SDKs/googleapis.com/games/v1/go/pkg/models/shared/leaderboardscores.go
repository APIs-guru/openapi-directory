package shared

type LeaderboardScores struct {
	Items         []LeaderboardEntry `json:"items"`
	Kind          *string            `json:"kind"`
	NextPageToken *string            `json:"nextPageToken"`
	NumScores     *string            `json:"numScores"`
	PlayerScore   *LeaderboardEntry  `json:"playerScore"`
	PrevPageToken *string            `json:"prevPageToken"`
}
