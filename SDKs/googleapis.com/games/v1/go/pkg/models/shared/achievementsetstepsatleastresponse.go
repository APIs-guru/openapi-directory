package shared

// AchievementSetStepsAtLeastResponse
// An achievement set steps at least response.
type AchievementSetStepsAtLeastResponse struct {
	CurrentSteps  *int32  `json:"currentSteps,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	NewlyUnlocked *bool   `json:"newlyUnlocked,omitempty"`
}
