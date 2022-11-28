package shared

// GamesAchievementIncrement
// The payload to request to increment an achievement.
type GamesAchievementIncrement struct {
	Kind      *string `json:"kind,omitempty"`
	RequestID *string `json:"requestId,omitempty"`
	Steps     *int32  `json:"steps,omitempty"`
}
