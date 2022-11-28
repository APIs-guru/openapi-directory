import { SpeakeasyBase } from "../../../internal/utils";
import { InsertionOrderBudgetSegment } from "./insertionorderbudgetsegment";
export declare enum InsertionOrderBudgetAutomationTypeEnum {
    InsertionOrderAutomationTypeUnspecified = "INSERTION_ORDER_AUTOMATION_TYPE_UNSPECIFIED",
    InsertionOrderAutomationTypeBudget = "INSERTION_ORDER_AUTOMATION_TYPE_BUDGET",
    InsertionOrderAutomationTypeNone = "INSERTION_ORDER_AUTOMATION_TYPE_NONE",
    InsertionOrderAutomationTypeBidBudget = "INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET"
}
export declare enum InsertionOrderBudgetBudgetUnitEnum {
    BudgetUnitUnspecified = "BUDGET_UNIT_UNSPECIFIED",
    BudgetUnitCurrency = "BUDGET_UNIT_CURRENCY",
    BudgetUnitImpressions = "BUDGET_UNIT_IMPRESSIONS"
}
/**
 * Settings that control how insertion order budget is allocated.
**/
export declare class InsertionOrderBudget extends SpeakeasyBase {
    automationType?: InsertionOrderBudgetAutomationTypeEnum;
    budgetSegments?: InsertionOrderBudgetSegment[];
    budgetUnit?: InsertionOrderBudgetBudgetUnitEnum;
}
