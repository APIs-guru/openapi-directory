package shared

// AchievementUpdateMultipleRequest
// A list of achievement update requests.
type AchievementUpdateMultipleRequest struct {
	Kind    *string                    `json:"kind,omitempty"`
	Updates []AchievementUpdateRequest `json:"updates,omitempty"`
}
