import { SpeakeasyBase } from "../../../internal/utils";
import { MediaItem } from "./mediaitem";
/**
 * Response message for Media.ListMediaItems.
**/
export declare class ListMediaItemsResponse extends SpeakeasyBase {
    mediaItems?: MediaItem[];
    nextPageToken?: string;
    totalMediaItemCount?: number;
}
