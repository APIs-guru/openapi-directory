package shared

// AchievementUpdateMultipleResponse
// Response message for UpdateMultipleAchievements rpc.
type AchievementUpdateMultipleResponse struct {
	Kind                *string                     `json:"kind,omitempty"`
	UpdatedAchievements []AchievementUpdateResponse `json:"updatedAchievements,omitempty"`
}
