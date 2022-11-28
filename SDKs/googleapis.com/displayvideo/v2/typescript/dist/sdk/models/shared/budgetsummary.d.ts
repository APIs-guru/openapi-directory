import { SpeakeasyBase } from "../../../internal/utils";
import { PrismaCpeCode } from "./prismacpecode";
/**
 * Summarized information of an individual campaign budget.
**/
export declare class BudgetSummary extends SpeakeasyBase {
    externalBudgetId?: string;
    preTaxAmountMicros?: string;
    prismaCpeCode?: PrismaCpeCode;
    taxAmountMicros?: string;
    totalAmountMicros?: string;
}
