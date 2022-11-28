import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1beta1Budget } from "./googlecloudbillingbudgetsv1beta1budget";
/**
 * Response for ListBudgets
**/
export declare class GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse extends SpeakeasyBase {
    budgets?: GoogleCloudBillingBudgetsV1beta1Budget[];
    nextPageToken?: string;
}
