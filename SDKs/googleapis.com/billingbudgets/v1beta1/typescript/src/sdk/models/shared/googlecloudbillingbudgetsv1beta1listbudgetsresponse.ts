import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1beta1Budget } from "./googlecloudbillingbudgetsv1beta1budget";



// GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
/** 
 * Response for ListBudgets
**/
export class GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=budgets", elemType: GoogleCloudBillingBudgetsV1beta1Budget })
  budgets?: GoogleCloudBillingBudgetsV1beta1Budget[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
