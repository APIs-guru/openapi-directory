import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceId } from "./resourceid";


// ActivityContentDetailsComment
/** 
 * Information about a resource that received a comment.
**/
export class ActivityContentDetailsComment extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;
}
