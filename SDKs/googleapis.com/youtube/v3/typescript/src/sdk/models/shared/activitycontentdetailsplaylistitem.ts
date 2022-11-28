import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";



// ActivityContentDetailsPlaylistItem
/** 
 * Information about a new playlist item.
**/
export class ActivityContentDetailsPlaylistItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=playlistId" })
  playlistId?: string;

  @SpeakeasyMetadata({ data: "json, name=playlistItemId" })
  playlistItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;
}
