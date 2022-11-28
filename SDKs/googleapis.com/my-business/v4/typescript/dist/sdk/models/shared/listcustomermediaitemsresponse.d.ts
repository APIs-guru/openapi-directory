import { SpeakeasyBase } from "../../../internal/utils";
import { MediaItem } from "./mediaitem";
/**
 * Response message for Media.ListCustomerMediaItems.
**/
export declare class ListCustomerMediaItemsResponse extends SpeakeasyBase {
    mediaItems?: MediaItem[];
    nextPageToken?: string;
    totalMediaItemCount?: number;
}
