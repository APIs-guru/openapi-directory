import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";



// ActivityContentDetailsSubscription
/** 
 * Information about a channel that a user subscribed to.
**/
export class ActivityContentDetailsSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;
}
