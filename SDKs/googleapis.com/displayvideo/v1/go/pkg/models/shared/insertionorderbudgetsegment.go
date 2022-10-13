package shared

type InsertionOrderBudgetSegment struct {
	BudgetAmountMicros *string    `json:"budgetAmountMicros"`
	CampaignBudgetID   *string    `json:"campaignBudgetId"`
	DateRange          *DateRange `json:"dateRange"`
	Description        *string    `json:"description"`
}
