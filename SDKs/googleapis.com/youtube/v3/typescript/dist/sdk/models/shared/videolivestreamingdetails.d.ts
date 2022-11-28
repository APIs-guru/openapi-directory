import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the live streaming metadata.
**/
export declare class VideoLiveStreamingDetails extends SpeakeasyBase {
    activeLiveChatId?: string;
    actualEndTime?: Date;
    actualStartTime?: Date;
    concurrentViewers?: string;
    scheduledEndTime?: Date;
    scheduledStartTime?: Date;
}
