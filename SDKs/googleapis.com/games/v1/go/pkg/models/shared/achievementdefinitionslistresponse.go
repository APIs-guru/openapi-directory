package shared

type AchievementDefinitionsListResponse struct {
	Items         []AchievementDefinition `json:"items"`
	Kind          *string                 `json:"kind"`
	NextPageToken *string                 `json:"nextPageToken"`
}
