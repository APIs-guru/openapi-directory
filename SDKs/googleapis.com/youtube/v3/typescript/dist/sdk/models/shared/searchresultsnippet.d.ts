import { SpeakeasyBase } from "../../../internal/utils";
import { ThumbnailDetails } from "./thumbnaildetails";
export declare enum SearchResultSnippetLiveBroadcastContentEnum {
    None = "none",
    Upcoming = "upcoming",
    Live = "live",
    Completed = "completed"
}
/**
 * Basic details about a search result, including title, description and thumbnails of the item referenced by the search result.
**/
export declare class SearchResultSnippet extends SpeakeasyBase {
    channelId?: string;
    channelTitle?: string;
    description?: string;
    liveBroadcastContent?: SearchResultSnippetLiveBroadcastContentEnum;
    publishedAt?: Date;
    thumbnails?: ThumbnailDetails;
    title?: string;
}
