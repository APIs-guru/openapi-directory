package shared

type ScoreSubmission struct {
	Kind          *string `json:"kind"`
	LeaderboardID *string `json:"leaderboardId"`
	Score         *string `json:"score"`
	ScoreTag      *string `json:"scoreTag"`
	Signature     *string `json:"signature"`
}
