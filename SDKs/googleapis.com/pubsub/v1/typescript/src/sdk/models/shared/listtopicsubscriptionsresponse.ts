import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTopicSubscriptionsResponse
/** 
 * Response for the `ListTopicSubscriptions` method.
**/
export class ListTopicSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions" })
  subscriptions?: string[];
}
