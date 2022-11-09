import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceId } from "./resourceid";


// ActivityContentDetailsFavorite
/** 
 * Information about a video that was marked as a favorite video.
**/
export class ActivityContentDetailsFavorite extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;
}
