import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";



// GoogleCloudBillingBudgetsV1BudgetAmount
/** 
 * The budgeted amount for each usage period.
**/
export class GoogleCloudBillingBudgetsV1BudgetAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastPeriodAmount" })
  lastPeriodAmount?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=specifiedAmount" })
  specifiedAmount?: GoogleTypeMoney;
}
