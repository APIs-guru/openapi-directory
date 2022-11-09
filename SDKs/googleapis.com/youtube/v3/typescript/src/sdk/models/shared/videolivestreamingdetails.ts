import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoLiveStreamingDetails
/** 
 * Details about the live streaming metadata.
**/
export class VideoLiveStreamingDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeLiveChatId" })
  activeLiveChatId?: string;

  @Metadata({ data: "json, name=actualEndTime" })
  actualEndTime?: Date;

  @Metadata({ data: "json, name=actualStartTime" })
  actualStartTime?: Date;

  @Metadata({ data: "json, name=concurrentViewers" })
  concurrentViewers?: string;

  @Metadata({ data: "json, name=scheduledEndTime" })
  scheduledEndTime?: Date;

  @Metadata({ data: "json, name=scheduledStartTime" })
  scheduledStartTime?: Date;
}
