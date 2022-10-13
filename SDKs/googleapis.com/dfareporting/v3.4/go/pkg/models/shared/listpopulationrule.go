package shared

type ListPopulationRule struct {
	FloodlightActivityID   *string                `json:"floodlightActivityId"`
	FloodlightActivityName *string                `json:"floodlightActivityName"`
	ListPopulationClauses  []ListPopulationClause `json:"listPopulationClauses"`
}
