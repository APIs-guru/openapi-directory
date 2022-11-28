import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1beta1BudgetInput } from "./googlecloudbillingbudgetsv1beta1budget";



// GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput
/** 
 * Request for UpdateBudget
**/
export class GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=budget" })
  budget?: GoogleCloudBillingBudgetsV1beta1BudgetInput;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
