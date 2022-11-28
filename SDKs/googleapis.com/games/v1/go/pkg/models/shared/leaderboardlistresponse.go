package shared

// LeaderboardListResponse
// A list of leaderboard objects.
type LeaderboardListResponse struct {
	Items         []Leaderboard `json:"items,omitempty"`
	Kind          *string       `json:"kind,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
