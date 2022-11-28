import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LineItemBudgetBudgetAllocationTypeEnum {
    LineItemBudgetAllocationTypeUnspecified = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED",
    LineItemBudgetAllocationTypeAutomatic = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC",
    LineItemBudgetAllocationTypeFixed = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED",
    LineItemBudgetAllocationTypeUnlimited = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED"
}
export declare enum LineItemBudgetBudgetUnitEnum {
    BudgetUnitUnspecified = "BUDGET_UNIT_UNSPECIFIED",
    BudgetUnitCurrency = "BUDGET_UNIT_CURRENCY",
    BudgetUnitImpressions = "BUDGET_UNIT_IMPRESSIONS"
}
/**
 * Settings that control how budget is allocated.
**/
export declare class LineItemBudget extends SpeakeasyBase {
    budgetAllocationType?: LineItemBudgetBudgetAllocationTypeEnum;
    budgetUnit?: LineItemBudgetBudgetUnitEnum;
    maxAmount?: string;
}
/**
 * Settings that control how budget is allocated.
**/
export declare class LineItemBudgetInput extends SpeakeasyBase {
    budgetAllocationType?: LineItemBudgetBudgetAllocationTypeEnum;
    maxAmount?: string;
}
