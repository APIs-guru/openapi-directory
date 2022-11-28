package shared

// PlayerScoreResetResponse
// A list of reset leaderboard entry resources.
type PlayerScoreResetResponse struct {
	DefinitionID        *string  `json:"definitionId,omitempty"`
	Kind                *string  `json:"kind,omitempty"`
	ResetScoreTimeSpans []string `json:"resetScoreTimeSpans,omitempty"`
}
