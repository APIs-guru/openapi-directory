package shared



type AchievementUpdateMultipleRequest struct {
    Kind *string `json:"kind,omitempty"`
    Updates []AchievementUpdateRequest `json:"updates,omitempty"`
    
}

