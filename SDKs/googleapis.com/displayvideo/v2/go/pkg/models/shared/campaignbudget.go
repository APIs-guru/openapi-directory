package shared

type CampaignBudgetBudgetUnitEnum string

const (
	CampaignBudgetBudgetUnitEnumBudgetUnitUnspecified CampaignBudgetBudgetUnitEnum = "BUDGET_UNIT_UNSPECIFIED"
	CampaignBudgetBudgetUnitEnumBudgetUnitCurrency    CampaignBudgetBudgetUnitEnum = "BUDGET_UNIT_CURRENCY"
	CampaignBudgetBudgetUnitEnumBudgetUnitImpressions CampaignBudgetBudgetUnitEnum = "BUDGET_UNIT_IMPRESSIONS"
)

type CampaignBudgetExternalBudgetSourceEnum string

const (
	CampaignBudgetExternalBudgetSourceEnumExternalBudgetSourceUnspecified CampaignBudgetExternalBudgetSourceEnum = "EXTERNAL_BUDGET_SOURCE_UNSPECIFIED"
	CampaignBudgetExternalBudgetSourceEnumExternalBudgetSourceNone        CampaignBudgetExternalBudgetSourceEnum = "EXTERNAL_BUDGET_SOURCE_NONE"
	CampaignBudgetExternalBudgetSourceEnumExternalBudgetSourceMediaOcean  CampaignBudgetExternalBudgetSourceEnum = "EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN"
)

// CampaignBudget
// Settings that control how the campaign budget is allocated.
type CampaignBudget struct {
	BudgetAmountMicros   *string                                 `json:"budgetAmountMicros,omitempty"`
	BudgetID             *string                                 `json:"budgetId,omitempty"`
	BudgetUnit           *CampaignBudgetBudgetUnitEnum           `json:"budgetUnit,omitempty"`
	DateRange            *DateRange                              `json:"dateRange,omitempty"`
	DisplayName          *string                                 `json:"displayName,omitempty"`
	ExternalBudgetID     *string                                 `json:"externalBudgetId,omitempty"`
	ExternalBudgetSource *CampaignBudgetExternalBudgetSourceEnum `json:"externalBudgetSource,omitempty"`
	InvoiceGroupingID    *string                                 `json:"invoiceGroupingId,omitempty"`
	PrismaConfig         *PrismaConfig                           `json:"prismaConfig,omitempty"`
}
