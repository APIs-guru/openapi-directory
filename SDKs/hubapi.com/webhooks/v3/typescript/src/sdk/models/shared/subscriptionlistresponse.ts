import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubscriptionResponse } from "./subscriptionresponse";


// SubscriptionListResponse
/** 
 * List of event subscriptions for your app
**/
export class SubscriptionListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.SubscriptionResponse })
  results: SubscriptionResponse[];
}
