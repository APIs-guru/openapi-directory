import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBillingBudgetsV1beta1Budget } from "./googlecloudbillingbudgetsv1beta1budget";


// GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
/** 
 * Response for ListBudgets
**/
export class GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=budgets", elemType: shared.GoogleCloudBillingBudgetsV1beta1Budget })
  budgets?: GoogleCloudBillingBudgetsV1beta1Budget[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
