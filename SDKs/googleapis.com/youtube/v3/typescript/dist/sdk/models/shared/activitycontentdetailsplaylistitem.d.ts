import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
/**
 * Information about a new playlist item.
**/
export declare class ActivityContentDetailsPlaylistItem extends SpeakeasyBase {
    playlistId?: string;
    playlistItemId?: string;
    resourceId?: ResourceId;
}
