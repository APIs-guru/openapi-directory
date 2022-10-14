package shared

type ScoreSubmission struct {
	Kind          *string `json:"kind,omitempty"`
	LeaderboardID *string `json:"leaderboardId,omitempty"`
	Score         *string `json:"score,omitempty"`
	ScoreTag      *string `json:"scoreTag,omitempty"`
	Signature     *string `json:"signature,omitempty"`
}
