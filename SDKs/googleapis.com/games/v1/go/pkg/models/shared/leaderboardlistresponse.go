package shared

type LeaderboardListResponse struct {
	Items         []Leaderboard `json:"items"`
	Kind          *string       `json:"kind"`
	NextPageToken *string       `json:"nextPageToken"`
}
