import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LiveBroadcastContentDetails } from "./livebroadcastcontentdetails";
import { LiveBroadcastSnippet } from "./livebroadcastsnippet";
import { LiveBroadcastStatistics } from "./livebroadcaststatistics";
import { LiveBroadcastStatus } from "./livebroadcaststatus";


// LiveBroadcast
/** 
 * A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube.
**/
export class LiveBroadcast extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentDetails" })
  contentDetails?: LiveBroadcastContentDetails;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: LiveBroadcastSnippet;

  @Metadata({ data: "json, name=statistics" })
  statistics?: LiveBroadcastStatistics;

  @Metadata({ data: "json, name=status" })
  status?: LiveBroadcastStatus;
}
