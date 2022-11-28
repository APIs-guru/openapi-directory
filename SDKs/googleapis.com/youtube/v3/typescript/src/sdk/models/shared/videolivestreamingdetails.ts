import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoLiveStreamingDetails
/** 
 * Details about the live streaming metadata.
**/
export class VideoLiveStreamingDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeLiveChatId" })
  activeLiveChatId?: string;

  @SpeakeasyMetadata({ data: "json, name=actualEndTime" })
  actualEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=actualStartTime" })
  actualStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=concurrentViewers" })
  concurrentViewers?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledEndTime" })
  scheduledEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=scheduledStartTime" })
  scheduledStartTime?: Date;
}
