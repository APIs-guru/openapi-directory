import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1beta1BudgetInput } from "./googlecloudbillingbudgetsv1beta1budget";
/**
 * Request for UpdateBudget
**/
export declare class GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput extends SpeakeasyBase {
    budget?: GoogleCloudBillingBudgetsV1beta1BudgetInput;
    updateMask?: string;
}
