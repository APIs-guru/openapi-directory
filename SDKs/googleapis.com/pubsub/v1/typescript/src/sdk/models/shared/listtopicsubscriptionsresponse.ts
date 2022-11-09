import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTopicSubscriptionsResponse
/** 
 * Response for the `ListTopicSubscriptions` method.
**/
export class ListTopicSubscriptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=subscriptions" })
  subscriptions?: string[];
}
