import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MediaItem } from "./mediaitem";


// ListCustomerMediaItemsResponse
/** 
 * Response message for Media.ListCustomerMediaItems.
**/
export class ListCustomerMediaItemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=mediaItems", elemType: shared.MediaItem })
  mediaItems?: MediaItem[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalMediaItemCount" })
  totalMediaItemCount?: number;
}
