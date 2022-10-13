package shared

type PlayerAchievementListResponse struct {
	Items         []PlayerAchievement `json:"items"`
	Kind          *string             `json:"kind"`
	NextPageToken *string             `json:"nextPageToken"`
}
