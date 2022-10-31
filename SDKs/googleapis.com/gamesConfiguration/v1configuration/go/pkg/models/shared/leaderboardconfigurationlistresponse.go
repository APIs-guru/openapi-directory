package shared

type LeaderboardConfigurationListResponse struct {
	Items         []LeaderboardConfiguration `json:"items,omitempty"`
	Kind          *string                    `json:"kind,omitempty"`
	NextPageToken *string                    `json:"nextPageToken,omitempty"`
}
