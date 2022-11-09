import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudBillingBudgetsV1beta1Budget } from "./googlecloudbillingbudgetsv1beta1budget";


// GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest
/** 
 * Request for CreateBudget
**/
export class GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=budget" })
  budget?: GoogleCloudBillingBudgetsV1beta1Budget;
}
