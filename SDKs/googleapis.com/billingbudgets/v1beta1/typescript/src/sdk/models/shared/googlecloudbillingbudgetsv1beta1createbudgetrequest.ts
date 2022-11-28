import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1beta1BudgetInput } from "./googlecloudbillingbudgetsv1beta1budget";



// GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput
/** 
 * Request for CreateBudget
**/
export class GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=budget" })
  budget?: GoogleCloudBillingBudgetsV1beta1BudgetInput;
}
