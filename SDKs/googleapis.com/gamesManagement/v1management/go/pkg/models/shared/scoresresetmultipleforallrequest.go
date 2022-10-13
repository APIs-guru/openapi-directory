package shared

type ScoresResetMultipleForAllRequest struct {
	Kind           *string  `json:"kind"`
	LeaderboardIds []string `json:"leaderboard_ids"`
}
