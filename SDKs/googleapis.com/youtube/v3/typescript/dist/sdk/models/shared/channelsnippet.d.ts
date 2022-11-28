import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelLocalization } from "./channellocalization";
import { ThumbnailDetails } from "./thumbnaildetails";
/**
 * Basic details about a channel, including title, description and thumbnails.
**/
export declare class ChannelSnippet extends SpeakeasyBase {
    country?: string;
    customUrl?: string;
    defaultLanguage?: string;
    description?: string;
    localized?: ChannelLocalization;
    publishedAt?: Date;
    thumbnails?: ThumbnailDetails;
    title?: string;
}
