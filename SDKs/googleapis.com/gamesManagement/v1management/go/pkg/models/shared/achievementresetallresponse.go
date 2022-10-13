package shared

type AchievementResetAllResponse struct {
	Kind    *string                    `json:"kind"`
	Results []AchievementResetResponse `json:"results"`
}
