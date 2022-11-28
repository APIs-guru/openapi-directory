import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LineItemBudgetBudgetAllocationTypeEnum {
    LineItemBudgetAllocationTypeUnspecified = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED",
    LineItemBudgetAllocationTypeAutomatic = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC",
    LineItemBudgetAllocationTypeFixed = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED",
    LineItemBudgetAllocationTypeUnlimited = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED"
}

export enum LineItemBudgetBudgetUnitEnum {
    BudgetUnitUnspecified = "BUDGET_UNIT_UNSPECIFIED",
    BudgetUnitCurrency = "BUDGET_UNIT_CURRENCY",
    BudgetUnitImpressions = "BUDGET_UNIT_IMPRESSIONS"
}


// LineItemBudget
/** 
 * Settings that control how budget is allocated.
**/
export class LineItemBudget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=budgetAllocationType" })
  budgetAllocationType?: LineItemBudgetBudgetAllocationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=budgetUnit" })
  budgetUnit?: LineItemBudgetBudgetUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=maxAmount" })
  maxAmount?: string;
}


// LineItemBudgetInput
/** 
 * Settings that control how budget is allocated.
**/
export class LineItemBudgetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=budgetAllocationType" })
  budgetAllocationType?: LineItemBudgetBudgetAllocationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=maxAmount" })
  maxAmount?: string;
}
