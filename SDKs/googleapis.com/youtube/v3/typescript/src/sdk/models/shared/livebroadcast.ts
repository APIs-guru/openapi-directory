import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiveBroadcastContentDetails } from "./livebroadcastcontentdetails";
import { LiveBroadcastSnippet } from "./livebroadcastsnippet";
import { LiveBroadcastStatistics } from "./livebroadcaststatistics";
import { LiveBroadcastStatus } from "./livebroadcaststatus";



// LiveBroadcast
/** 
 * A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube.
**/
export class LiveBroadcast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentDetails" })
  contentDetails?: LiveBroadcastContentDetails;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: LiveBroadcastSnippet;

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics?: LiveBroadcastStatistics;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: LiveBroadcastStatus;
}
