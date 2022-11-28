import { SpeakeasyBase } from "../../../internal/utils";
import { MetricStructuredName } from "./metricstructuredname";
/**
 * Describes the state of a metric.
**/
export declare class MetricUpdate extends SpeakeasyBase {
    cumulative?: boolean;
    distribution?: any;
    gauge?: any;
    internal?: any;
    kind?: string;
    meanCount?: any;
    meanSum?: any;
    name?: MetricStructuredName;
    scalar?: any;
    set?: any;
    updateTime?: string;
}
