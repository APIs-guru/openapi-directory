package shared

// AchievementDefinitionsListResponse
// A list of achievement definition objects.
type AchievementDefinitionsListResponse struct {
	Items         []AchievementDefinition `json:"items,omitempty"`
	Kind          *string                 `json:"kind,omitempty"`
	NextPageToken *string                 `json:"nextPageToken,omitempty"`
}
