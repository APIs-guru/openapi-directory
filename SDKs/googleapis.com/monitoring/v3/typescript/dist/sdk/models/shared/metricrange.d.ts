import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleMonitoringV3Range } from "./googlemonitoringv3range";
/**
 * A MetricRange is used when each window is good when the value x of a single TimeSeries satisfies range.min <= x <= range.max. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE.
**/
export declare class MetricRange extends SpeakeasyBase {
    range?: GoogleMonitoringV3Range;
    timeSeries?: string;
}
