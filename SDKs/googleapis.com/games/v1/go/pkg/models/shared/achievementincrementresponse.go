package shared

type AchievementIncrementResponse struct {
	CurrentSteps  *int32  `json:"currentSteps"`
	Kind          *string `json:"kind"`
	NewlyUnlocked *bool   `json:"newlyUnlocked"`
}
