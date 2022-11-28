import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";
/**
 * The budgeted amount for each usage period.
**/
export declare class GoogleCloudBillingBudgetsV1BudgetAmount extends SpeakeasyBase {
    lastPeriodAmount?: Map<string, any>;
    specifiedAmount?: GoogleTypeMoney;
}
