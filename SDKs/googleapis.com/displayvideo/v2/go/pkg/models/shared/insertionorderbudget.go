package shared

type InsertionOrderBudgetAutomationTypeEnum string

const (
	InsertionOrderBudgetAutomationTypeEnumInsertionOrderAutomationTypeUnspecified InsertionOrderBudgetAutomationTypeEnum = "INSERTION_ORDER_AUTOMATION_TYPE_UNSPECIFIED"
	InsertionOrderBudgetAutomationTypeEnumInsertionOrderAutomationTypeBudget      InsertionOrderBudgetAutomationTypeEnum = "INSERTION_ORDER_AUTOMATION_TYPE_BUDGET"
	InsertionOrderBudgetAutomationTypeEnumInsertionOrderAutomationTypeNone        InsertionOrderBudgetAutomationTypeEnum = "INSERTION_ORDER_AUTOMATION_TYPE_NONE"
	InsertionOrderBudgetAutomationTypeEnumInsertionOrderAutomationTypeBidBudget   InsertionOrderBudgetAutomationTypeEnum = "INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET"
)

type InsertionOrderBudgetBudgetUnitEnum string

const (
	InsertionOrderBudgetBudgetUnitEnumBudgetUnitUnspecified InsertionOrderBudgetBudgetUnitEnum = "BUDGET_UNIT_UNSPECIFIED"
	InsertionOrderBudgetBudgetUnitEnumBudgetUnitCurrency    InsertionOrderBudgetBudgetUnitEnum = "BUDGET_UNIT_CURRENCY"
	InsertionOrderBudgetBudgetUnitEnumBudgetUnitImpressions InsertionOrderBudgetBudgetUnitEnum = "BUDGET_UNIT_IMPRESSIONS"
)

type InsertionOrderBudget struct {
	AutomationType *InsertionOrderBudgetAutomationTypeEnum `json:"automationType,omitempty"`
	BudgetSegments []InsertionOrderBudgetSegment           `json:"budgetSegments,omitempty"`
	BudgetUnit     *InsertionOrderBudgetBudgetUnitEnum     `json:"budgetUnit,omitempty"`
}
