import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LiveBroadcastStatistics
/** 
 * Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts.
**/
export class LiveBroadcastStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=concurrentViewers" })
  concurrentViewers?: string;

  @Metadata({ data: "json, name=totalChatCount" })
  totalChatCount?: string;
}
