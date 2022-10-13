package shared

type AchievementUnlockResponse struct {
	Kind          *string `json:"kind"`
	NewlyUnlocked *bool   `json:"newlyUnlocked"`
}
