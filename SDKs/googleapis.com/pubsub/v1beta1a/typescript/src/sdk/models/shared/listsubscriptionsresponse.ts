import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Subscription } from "./subscription";


// ListSubscriptionsResponse
/** 
 * Response for the ListSubscriptions method.
**/
export class ListSubscriptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=subscription", elemType: shared.Subscription })
  subscription?: Subscription[];
}
