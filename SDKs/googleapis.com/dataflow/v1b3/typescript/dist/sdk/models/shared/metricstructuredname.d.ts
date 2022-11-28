import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies a metric, by describing the source which generated the metric.
**/
export declare class MetricStructuredName extends SpeakeasyBase {
    context?: Map<string, string>;
    name?: string;
    origin?: string;
}
