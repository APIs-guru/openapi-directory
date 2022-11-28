package shared

// AchievementIncrementResponse
// An achievement increment response
type AchievementIncrementResponse struct {
	CurrentSteps  *int32  `json:"currentSteps,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	NewlyUnlocked *bool   `json:"newlyUnlocked,omitempty"`
}
