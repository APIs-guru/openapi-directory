package shared



type ScoresResetMultipleForAllRequest struct {
    Kind *string `json:"kind,omitempty"`
    LeaderboardIds []string `json:"leaderboard_ids,omitempty"`
    
}

