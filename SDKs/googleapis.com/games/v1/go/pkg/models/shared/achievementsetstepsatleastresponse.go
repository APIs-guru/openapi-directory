package shared

type AchievementSetStepsAtLeastResponse struct {
	CurrentSteps  *int32  `json:"currentSteps"`
	Kind          *string `json:"kind"`
	NewlyUnlocked *bool   `json:"newlyUnlocked"`
}
