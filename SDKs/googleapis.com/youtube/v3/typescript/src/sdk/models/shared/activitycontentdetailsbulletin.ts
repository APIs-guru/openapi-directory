import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceId } from "./resourceid";


// ActivityContentDetailsBulletin
/** 
 * Details about a channel bulletin post.
**/
export class ActivityContentDetailsBulletin extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;
}
