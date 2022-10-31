package shared



type LeaderboardScores struct {
    Items []LeaderboardEntry `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    NumScores *string `json:"numScores,omitempty"`
    PlayerScore *LeaderboardEntry `json:"playerScore,omitempty"`
    PrevPageToken *string `json:"prevPageToken,omitempty"`
    
}

