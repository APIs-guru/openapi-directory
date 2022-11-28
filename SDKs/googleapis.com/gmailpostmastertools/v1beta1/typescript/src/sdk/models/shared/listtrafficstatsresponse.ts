import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficStats } from "./trafficstats";



// ListTrafficStatsResponse
/** 
 * Response message for ListTrafficStats.
**/
export class ListTrafficStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=trafficStats", elemType: TrafficStats })
  trafficStats?: TrafficStats[];
}
