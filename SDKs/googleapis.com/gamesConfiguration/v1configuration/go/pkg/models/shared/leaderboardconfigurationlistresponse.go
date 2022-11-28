package shared

// LeaderboardConfigurationListResponse
// A ListConfigurations response.
type LeaderboardConfigurationListResponse struct {
	Items         []LeaderboardConfiguration `json:"items,omitempty"`
	Kind          *string                    `json:"kind,omitempty"`
	NextPageToken *string                    `json:"nextPageToken,omitempty"`
}
