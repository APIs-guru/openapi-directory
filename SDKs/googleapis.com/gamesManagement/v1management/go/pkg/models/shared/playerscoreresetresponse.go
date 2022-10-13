package shared

type PlayerScoreResetResponse struct {
	DefinitionID        *string  `json:"definitionId"`
	Kind                *string  `json:"kind"`
	ResetScoreTimeSpans []string `json:"resetScoreTimeSpans"`
}
