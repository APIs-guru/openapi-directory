package shared

type AchievementUpdateMultipleRequest struct {
	Kind    *string                    `json:"kind"`
	Updates []AchievementUpdateRequest `json:"updates"`
}
