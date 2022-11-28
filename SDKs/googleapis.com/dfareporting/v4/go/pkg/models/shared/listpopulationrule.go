package shared

// ListPopulationRule
// Remarketing List Population Rule.
type ListPopulationRule struct {
	FloodlightActivityID   *string                `json:"floodlightActivityId,omitempty"`
	FloodlightActivityName *string                `json:"floodlightActivityName,omitempty"`
	ListPopulationClauses  []ListPopulationClause `json:"listPopulationClauses,omitempty"`
}
