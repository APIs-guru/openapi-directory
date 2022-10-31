package shared



type AchievementUpdateMultipleResponse struct {
    Kind *string `json:"kind,omitempty"`
    UpdatedAchievements []AchievementUpdateResponse `json:"updatedAchievements,omitempty"`
    
}

