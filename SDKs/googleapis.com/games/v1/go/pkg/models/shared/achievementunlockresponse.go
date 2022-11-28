package shared

// AchievementUnlockResponse
// An achievement unlock response
type AchievementUnlockResponse struct {
	Kind          *string `json:"kind,omitempty"`
	NewlyUnlocked *bool   `json:"newlyUnlocked,omitempty"`
}
