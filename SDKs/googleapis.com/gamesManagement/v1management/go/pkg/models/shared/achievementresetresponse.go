package shared

// AchievementResetResponse
// An achievement reset response.
type AchievementResetResponse struct {
	CurrentState   *string `json:"currentState,omitempty"`
	DefinitionID   *string `json:"definitionId,omitempty"`
	Kind           *string `json:"kind,omitempty"`
	UpdateOccurred *bool   `json:"updateOccurred,omitempty"`
}
