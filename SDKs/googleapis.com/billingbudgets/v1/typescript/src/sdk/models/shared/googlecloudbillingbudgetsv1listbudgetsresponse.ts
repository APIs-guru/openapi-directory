import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBillingBudgetsV1Budget } from "./googlecloudbillingbudgetsv1budget";


// GoogleCloudBillingBudgetsV1ListBudgetsResponse
/** 
 * Response for ListBudgets
**/
export class GoogleCloudBillingBudgetsV1ListBudgetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=budgets", elemType: shared.GoogleCloudBillingBudgetsV1Budget })
  budgets?: GoogleCloudBillingBudgetsV1Budget[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
