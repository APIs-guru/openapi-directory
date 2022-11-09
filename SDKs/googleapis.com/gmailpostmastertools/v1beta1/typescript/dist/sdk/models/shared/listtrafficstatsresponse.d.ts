import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TrafficStats } from "./trafficstats";
/**
 * Response message for ListTrafficStats.
**/
export declare class ListTrafficStatsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    trafficStats?: TrafficStats[];
}
