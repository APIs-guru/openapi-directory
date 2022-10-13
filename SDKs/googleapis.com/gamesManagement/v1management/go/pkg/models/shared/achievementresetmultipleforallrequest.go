package shared

type AchievementResetMultipleForAllRequest struct {
	AchievementIds []string `json:"achievement_ids"`
	Kind           *string  `json:"kind"`
}
