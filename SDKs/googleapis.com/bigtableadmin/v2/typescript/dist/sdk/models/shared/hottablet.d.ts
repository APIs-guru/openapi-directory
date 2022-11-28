import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A tablet is a defined by a start and end key and is explained in https://cloud.google.com/bigtable/docs/overview#architecture and https://cloud.google.com/bigtable/docs/performance#optimization. A Hot tablet is a tablet that exhibits high average cpu usage during the time interval from start time to end time.
**/
export declare class HotTablet extends SpeakeasyBase {
    endKey?: string;
    endTime?: string;
    name?: string;
    nodeCpuUsagePercent?: number;
    startKey?: string;
    startTime?: string;
    tableName?: string;
}
