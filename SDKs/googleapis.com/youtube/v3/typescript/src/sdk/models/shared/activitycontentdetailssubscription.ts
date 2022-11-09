import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceId } from "./resourceid";


// ActivityContentDetailsSubscription
/** 
 * Information about a channel that a user subscribed to.
**/
export class ActivityContentDetailsSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;
}
