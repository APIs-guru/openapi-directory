package shared

// PlayerAchievementListResponse
// A list of achievement objects.
type PlayerAchievementListResponse struct {
	Items         []PlayerAchievement `json:"items,omitempty"`
	Kind          *string             `json:"kind,omitempty"`
	NextPageToken *string             `json:"nextPageToken,omitempty"`
}
