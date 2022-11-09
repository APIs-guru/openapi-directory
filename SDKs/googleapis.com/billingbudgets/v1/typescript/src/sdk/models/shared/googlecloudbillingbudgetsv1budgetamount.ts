import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeMoney } from "./googletypemoney";


// GoogleCloudBillingBudgetsV1BudgetAmount
/** 
 * The budgeted amount for each usage period.
**/
export class GoogleCloudBillingBudgetsV1BudgetAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastPeriodAmount" })
  lastPeriodAmount?: Map<string, any>;

  @Metadata({ data: "json, name=specifiedAmount" })
  specifiedAmount?: GoogleTypeMoney;
}
