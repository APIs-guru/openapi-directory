import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrafficStats } from "./trafficstats";


// ListTrafficStatsResponse
/** 
 * Response message for ListTrafficStats.
**/
export class ListTrafficStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=trafficStats", elemType: shared.TrafficStats })
  trafficStats?: TrafficStats[];
}
