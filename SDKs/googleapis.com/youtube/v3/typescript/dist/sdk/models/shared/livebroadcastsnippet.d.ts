import { SpeakeasyBase } from "../../../internal/utils";
import { ThumbnailDetails } from "./thumbnaildetails";
/**
 * Basic broadcast information.
**/
export declare class LiveBroadcastSnippet extends SpeakeasyBase {
    actualEndTime?: Date;
    actualStartTime?: Date;
    channelId?: string;
    description?: string;
    isDefaultBroadcast?: boolean;
    liveChatId?: string;
    publishedAt?: Date;
    scheduledEndTime?: Date;
    scheduledStartTime?: Date;
    thumbnails?: ThumbnailDetails;
    title?: string;
}
