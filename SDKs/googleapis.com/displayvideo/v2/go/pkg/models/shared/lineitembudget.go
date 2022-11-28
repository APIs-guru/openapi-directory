package shared

type LineItemBudgetBudgetAllocationTypeEnum string

const (
	LineItemBudgetBudgetAllocationTypeEnumLineItemBudgetAllocationTypeUnspecified LineItemBudgetBudgetAllocationTypeEnum = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED"
	LineItemBudgetBudgetAllocationTypeEnumLineItemBudgetAllocationTypeAutomatic   LineItemBudgetBudgetAllocationTypeEnum = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC"
	LineItemBudgetBudgetAllocationTypeEnumLineItemBudgetAllocationTypeFixed       LineItemBudgetBudgetAllocationTypeEnum = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED"
	LineItemBudgetBudgetAllocationTypeEnumLineItemBudgetAllocationTypeUnlimited   LineItemBudgetBudgetAllocationTypeEnum = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED"
)

type LineItemBudgetBudgetUnitEnum string

const (
	LineItemBudgetBudgetUnitEnumBudgetUnitUnspecified LineItemBudgetBudgetUnitEnum = "BUDGET_UNIT_UNSPECIFIED"
	LineItemBudgetBudgetUnitEnumBudgetUnitCurrency    LineItemBudgetBudgetUnitEnum = "BUDGET_UNIT_CURRENCY"
	LineItemBudgetBudgetUnitEnumBudgetUnitImpressions LineItemBudgetBudgetUnitEnum = "BUDGET_UNIT_IMPRESSIONS"
)

// LineItemBudget
// Settings that control how budget is allocated.
type LineItemBudget struct {
	BudgetAllocationType *LineItemBudgetBudgetAllocationTypeEnum `json:"budgetAllocationType,omitempty"`
	BudgetUnit           *LineItemBudgetBudgetUnitEnum           `json:"budgetUnit,omitempty"`
	MaxAmount            *string                                 `json:"maxAmount,omitempty"`
}

// LineItemBudgetInput
// Settings that control how budget is allocated.
type LineItemBudgetInput struct {
	BudgetAllocationType *LineItemBudgetBudgetAllocationTypeEnum `json:"budgetAllocationType,omitempty"`
	MaxAmount            *string                                 `json:"maxAmount,omitempty"`
}
