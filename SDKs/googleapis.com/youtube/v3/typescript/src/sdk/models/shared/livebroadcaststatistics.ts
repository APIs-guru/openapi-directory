import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LiveBroadcastStatistics
/** 
 * Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts.
**/
export class LiveBroadcastStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=concurrentViewers" })
  concurrentViewers?: string;

  @SpeakeasyMetadata({ data: "json, name=totalChatCount" })
  totalChatCount?: string;
}
