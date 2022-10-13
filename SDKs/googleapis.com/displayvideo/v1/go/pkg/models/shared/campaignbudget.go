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

type CampaignBudget struct {
	BudgetAmountMicros   *string                                 `json:"budgetAmountMicros"`
	BudgetID             *string                                 `json:"budgetId"`
	BudgetUnit           *CampaignBudgetBudgetUnitEnum           `json:"budgetUnit"`
	DateRange            *DateRange                              `json:"dateRange"`
	DisplayName          *string                                 `json:"displayName"`
	ExternalBudgetID     *string                                 `json:"externalBudgetId"`
	ExternalBudgetSource *CampaignBudgetExternalBudgetSourceEnum `json:"externalBudgetSource"`
	InvoiceGroupingID    *string                                 `json:"invoiceGroupingId"`
	PrismaConfig         *PrismaConfig                           `json:"prismaConfig"`
}
