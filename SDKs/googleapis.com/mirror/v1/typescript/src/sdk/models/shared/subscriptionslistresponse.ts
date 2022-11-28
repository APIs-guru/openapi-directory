import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";



// SubscriptionsListResponse
/** 
 * A list of Subscriptions. This is the response from the server to GET requests on the subscription collection.
**/
export class SubscriptionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Subscription })
  items?: Subscription[];

  @SpeakeasyMetadata()
  kind?: string;
}
