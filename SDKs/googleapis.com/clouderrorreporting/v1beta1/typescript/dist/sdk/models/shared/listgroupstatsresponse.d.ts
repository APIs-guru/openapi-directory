import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorGroupStats } from "./errorgroupstats";
/**
 * Contains a set of requested error group stats.
**/
export declare class ListGroupStatsResponse extends SpeakeasyBase {
    errorGroupStats?: ErrorGroupStats[];
    nextPageToken?: string;
    timeRangeBegin?: string;
}
