import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsertionOrderBudgetSegment } from "./insertionorderbudgetsegment";


export enum InsertionOrderBudgetAutomationTypeEnum {
    InsertionOrderAutomationTypeUnspecified = "INSERTION_ORDER_AUTOMATION_TYPE_UNSPECIFIED",
    InsertionOrderAutomationTypeBudget = "INSERTION_ORDER_AUTOMATION_TYPE_BUDGET",
    InsertionOrderAutomationTypeNone = "INSERTION_ORDER_AUTOMATION_TYPE_NONE",
    InsertionOrderAutomationTypeBidBudget = "INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET"
}

export enum InsertionOrderBudgetBudgetUnitEnum {
    BudgetUnitUnspecified = "BUDGET_UNIT_UNSPECIFIED",
    BudgetUnitCurrency = "BUDGET_UNIT_CURRENCY",
    BudgetUnitImpressions = "BUDGET_UNIT_IMPRESSIONS"
}


// InsertionOrderBudget
/** 
 * Settings that control how insertion order budget is allocated.
**/
export class InsertionOrderBudget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automationType" })
  automationType?: InsertionOrderBudgetAutomationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=budgetSegments", elemType: InsertionOrderBudgetSegment })
  budgetSegments?: InsertionOrderBudgetSegment[];

  @SpeakeasyMetadata({ data: "json, name=budgetUnit" })
  budgetUnit?: InsertionOrderBudgetBudgetUnitEnum;
}
