package shared

// AchievementResetAllResponse
// Achievement reset all response.
type AchievementResetAllResponse struct {
	Kind    *string                    `json:"kind,omitempty"`
	Results []AchievementResetResponse `json:"results,omitempty"`
}
