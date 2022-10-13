package shared

type AchievementResetResponse struct {
	CurrentState   *string `json:"currentState"`
	DefinitionID   *string `json:"definitionId"`
	Kind           *string `json:"kind"`
	UpdateOccurred *bool   `json:"updateOccurred"`
}
