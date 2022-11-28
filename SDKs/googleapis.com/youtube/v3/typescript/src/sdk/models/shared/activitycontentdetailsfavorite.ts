import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";



// ActivityContentDetailsFavorite
/** 
 * Information about a video that was marked as a favorite video.
**/
export class ActivityContentDetailsFavorite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;
}
