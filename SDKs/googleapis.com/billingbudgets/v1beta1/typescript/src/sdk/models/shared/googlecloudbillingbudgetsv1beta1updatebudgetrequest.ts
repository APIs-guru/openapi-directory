import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudBillingBudgetsV1beta1Budget } from "./googlecloudbillingbudgetsv1beta1budget";


// GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest
/** 
 * Request for UpdateBudget
**/
export class GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=budget" })
  budget?: GoogleCloudBillingBudgetsV1beta1Budget;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
