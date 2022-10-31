package shared



type PlayerScoreResetResponse struct {
    DefinitionID *string `json:"definitionId,omitempty"`
    Kind *string `json:"kind,omitempty"`
    ResetScoreTimeSpans []string `json:"resetScoreTimeSpans,omitempty"`
    
}

