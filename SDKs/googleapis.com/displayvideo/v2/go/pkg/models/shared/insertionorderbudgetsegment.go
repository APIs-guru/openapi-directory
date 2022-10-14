package shared

type InsertionOrderBudgetSegment struct {
	BudgetAmountMicros *string    `json:"budgetAmountMicros,omitempty"`
	CampaignBudgetID   *string    `json:"campaignBudgetId,omitempty"`
	DateRange          *DateRange `json:"dateRange,omitempty"`
	Description        *string    `json:"description,omitempty"`
}
