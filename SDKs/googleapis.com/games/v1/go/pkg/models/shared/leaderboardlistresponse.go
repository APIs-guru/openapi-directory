package shared



type LeaderboardListResponse struct {
    Items []Leaderboard `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

