import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelStatistics
/** 
 * Statistics about a channel: number of subscribers, number of videos in the channel, etc.
**/
export class ChannelStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commentCount" })
  commentCount?: string;

  @SpeakeasyMetadata({ data: "json, name=hiddenSubscriberCount" })
  hiddenSubscriberCount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subscriberCount" })
  subscriberCount?: string;

  @SpeakeasyMetadata({ data: "json, name=videoCount" })
  videoCount?: string;

  @SpeakeasyMetadata({ data: "json, name=viewCount" })
  viewCount?: string;
}
