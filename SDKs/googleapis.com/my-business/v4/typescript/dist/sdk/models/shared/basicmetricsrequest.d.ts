import { SpeakeasyBase } from "../../../internal/utils";
import { MetricRequest } from "./metricrequest";
import { TimeRange } from "./timerange";
/**
 * A request for basic metric insights.
**/
export declare class BasicMetricsRequest extends SpeakeasyBase {
    metricRequests?: MetricRequest[];
    timeRange?: TimeRange;
}
