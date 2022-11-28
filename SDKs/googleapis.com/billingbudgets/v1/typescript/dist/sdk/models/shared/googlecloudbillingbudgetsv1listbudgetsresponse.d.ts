import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1Budget } from "./googlecloudbillingbudgetsv1budget";
/**
 * Response for ListBudgets
**/
export declare class GoogleCloudBillingBudgetsV1ListBudgetsResponse extends SpeakeasyBase {
    budgets?: GoogleCloudBillingBudgetsV1Budget[];
    nextPageToken?: string;
}
