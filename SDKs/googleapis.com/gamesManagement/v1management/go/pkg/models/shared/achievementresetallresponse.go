package shared

type AchievementResetAllResponse struct {
	Kind    *string                    `json:"kind,omitempty"`
	Results []AchievementResetResponse `json:"results,omitempty"`
}
