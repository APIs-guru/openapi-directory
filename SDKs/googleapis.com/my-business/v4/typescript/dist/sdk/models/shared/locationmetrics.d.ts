import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
/**
 * A series of Metrics and BreakdownMetrics associated with a Location over some time range.
**/
export declare class LocationMetrics extends SpeakeasyBase {
    locationName?: string;
    metricValues?: MetricValue[];
    timeZone?: string;
}
