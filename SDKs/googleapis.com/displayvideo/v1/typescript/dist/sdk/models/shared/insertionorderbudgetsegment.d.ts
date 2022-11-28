import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
/**
 * Settings that control the budget of a single budget segment.
**/
export declare class InsertionOrderBudgetSegment extends SpeakeasyBase {
    budgetAmountMicros?: string;
    campaignBudgetId?: string;
    dateRange?: DateRange;
    description?: string;
}
