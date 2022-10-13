package shared

type AchievementConfigurationListResponse struct {
	Items         []AchievementConfiguration `json:"items"`
	Kind          *string                    `json:"kind"`
	NextPageToken *string                    `json:"nextPageToken"`
}
