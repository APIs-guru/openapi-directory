import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChannelStatistics
/** 
 * Statistics about a channel: number of subscribers, number of videos in the channel, etc.
**/
export class ChannelStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=commentCount" })
  commentCount?: string;

  @Metadata({ data: "json, name=hiddenSubscriberCount" })
  hiddenSubscriberCount?: boolean;

  @Metadata({ data: "json, name=subscriberCount" })
  subscriberCount?: string;

  @Metadata({ data: "json, name=videoCount" })
  videoCount?: string;

  @Metadata({ data: "json, name=viewCount" })
  viewCount?: string;
}
