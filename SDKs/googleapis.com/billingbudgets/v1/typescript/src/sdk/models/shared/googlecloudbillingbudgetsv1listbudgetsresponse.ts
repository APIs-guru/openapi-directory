import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1Budget } from "./googlecloudbillingbudgetsv1budget";



// GoogleCloudBillingBudgetsV1ListBudgetsResponse
/** 
 * Response for ListBudgets
**/
export class GoogleCloudBillingBudgetsV1ListBudgetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=budgets", elemType: GoogleCloudBillingBudgetsV1Budget })
  budgets?: GoogleCloudBillingBudgetsV1Budget[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
