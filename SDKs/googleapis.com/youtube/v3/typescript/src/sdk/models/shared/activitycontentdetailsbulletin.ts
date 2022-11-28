import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";



// ActivityContentDetailsBulletin
/** 
 * Details about a channel bulletin post.
**/
export class ActivityContentDetailsBulletin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;
}
