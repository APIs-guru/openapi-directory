import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LogMetric } from "./logmetric";
/**
 * Result returned from ListLogMetrics.
**/
export declare class ListLogMetricsResponse extends SpeakeasyBase {
    metrics?: LogMetric[];
    nextPageToken?: string;
}
