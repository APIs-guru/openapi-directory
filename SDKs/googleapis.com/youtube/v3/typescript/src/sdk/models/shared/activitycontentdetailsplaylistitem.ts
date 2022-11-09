import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceId } from "./resourceid";


// ActivityContentDetailsPlaylistItem
/** 
 * Information about a new playlist item.
**/
export class ActivityContentDetailsPlaylistItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=playlistId" })
  playlistId?: string;

  @Metadata({ data: "json, name=playlistItemId" })
  playlistItemId?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;
}
