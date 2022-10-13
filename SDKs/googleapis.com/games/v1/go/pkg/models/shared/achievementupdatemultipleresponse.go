package shared

type AchievementUpdateMultipleResponse struct {
	Kind                *string                     `json:"kind"`
	UpdatedAchievements []AchievementUpdateResponse `json:"updatedAchievements"`
}
