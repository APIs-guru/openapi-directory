package shared

type LeaderboardConfigurationListResponse struct {
	Items         []LeaderboardConfiguration `json:"items"`
	Kind          *string                    `json:"kind"`
	NextPageToken *string                    `json:"nextPageToken"`
}
