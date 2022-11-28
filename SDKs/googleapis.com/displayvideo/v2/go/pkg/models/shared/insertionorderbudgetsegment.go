package shared

// InsertionOrderBudgetSegment
// Settings that control the budget of a single budget segment.
type InsertionOrderBudgetSegment struct {
	BudgetAmountMicros *string    `json:"budgetAmountMicros,omitempty"`
	CampaignBudgetID   *string    `json:"campaignBudgetId,omitempty"`
	DateRange          *DateRange `json:"dateRange,omitempty"`
	Description        *string    `json:"description,omitempty"`
}
