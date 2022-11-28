import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";



// ListSubscriptionsResponse
/** 
 * Response for the `ListSubscriptions` method.
**/
export class ListSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: Subscription })
  subscriptions?: Subscription[];
}
