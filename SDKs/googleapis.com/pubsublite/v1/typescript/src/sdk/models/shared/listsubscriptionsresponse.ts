import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Subscription } from "./subscription";


// ListSubscriptionsResponse
/** 
 * Response for ListSubscriptions.
**/
export class ListSubscriptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=subscriptions", elemType: shared.Subscription })
  subscriptions?: Subscription[];
}
