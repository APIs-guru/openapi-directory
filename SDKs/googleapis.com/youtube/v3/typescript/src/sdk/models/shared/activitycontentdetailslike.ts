import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";



// ActivityContentDetailsLike
/** 
 * Information about a resource that received a positive (like) rating.
**/
export class ActivityContentDetailsLike extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;
}
