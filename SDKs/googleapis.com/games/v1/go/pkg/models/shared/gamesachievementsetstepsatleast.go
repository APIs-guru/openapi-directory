package shared

// GamesAchievementSetStepsAtLeast
// The payload to request to increment an achievement.
type GamesAchievementSetStepsAtLeast struct {
	Kind  *string `json:"kind,omitempty"`
	Steps *int32  `json:"steps,omitempty"`
}
