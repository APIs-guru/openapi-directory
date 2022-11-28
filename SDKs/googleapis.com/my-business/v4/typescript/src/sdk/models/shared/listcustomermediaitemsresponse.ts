import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediaItem } from "./mediaitem";



// ListCustomerMediaItemsResponse
/** 
 * Response message for Media.ListCustomerMediaItems.
**/
export class ListCustomerMediaItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mediaItems", elemType: MediaItem })
  mediaItems?: MediaItem[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalMediaItemCount" })
  totalMediaItemCount?: number;
}
