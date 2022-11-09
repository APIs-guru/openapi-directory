import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThumbnailDetails } from "./thumbnaildetails";

export enum SearchResultSnippetLiveBroadcastContentEnum {
    None = "none"
,    Upcoming = "upcoming"
,    Live = "live"
,    Completed = "completed"
}


// SearchResultSnippet
/** 
 * Basic details about a search result, including title, description and thumbnails of the item referenced by the search result.
**/
export class SearchResultSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=channelTitle" })
  channelTitle?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=liveBroadcastContent" })
  liveBroadcastContent?: SearchResultSnippetLiveBroadcastContentEnum;

  @Metadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @Metadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
