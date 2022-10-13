package shared

type PlayerLeaderboardScoreListResponse struct {
	Items         []PlayerLeaderboardScore `json:"items"`
	Kind          *string                  `json:"kind"`
	NextPageToken *string                  `json:"nextPageToken"`
	Player        *Player                  `json:"player"`
}
