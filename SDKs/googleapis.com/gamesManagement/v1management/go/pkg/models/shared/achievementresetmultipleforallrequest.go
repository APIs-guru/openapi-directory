package shared

type AchievementResetMultipleForAllRequest struct {
	AchievementIds []string `json:"achievement_ids,omitempty"`
	Kind           *string  `json:"kind,omitempty"`
}
