import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThumbnailDetails } from "./thumbnaildetails";


export enum SearchResultSnippetLiveBroadcastContentEnum {
    None = "none",
    Upcoming = "upcoming",
    Live = "live",
    Completed = "completed"
}


// SearchResultSnippet
/** 
 * Basic details about a search result, including title, description and thumbnails of the item referenced by the search result.
**/
export class SearchResultSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=channelTitle" })
  channelTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=liveBroadcastContent" })
  liveBroadcastContent?: SearchResultSnippetLiveBroadcastContentEnum;

  @SpeakeasyMetadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
