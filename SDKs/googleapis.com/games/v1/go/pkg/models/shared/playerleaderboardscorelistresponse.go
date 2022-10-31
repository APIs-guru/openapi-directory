package shared



type PlayerLeaderboardScoreListResponse struct {
    Items []PlayerLeaderboardScore `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Player *Player `json:"player,omitempty"`
    
}

