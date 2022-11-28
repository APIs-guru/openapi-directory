import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionResponse } from "./subscriptionresponse";



// SubscriptionListResponse
/** 
 * List of event subscriptions for your app
**/
export class SubscriptionListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: SubscriptionResponse })
  results: SubscriptionResponse[];
}
