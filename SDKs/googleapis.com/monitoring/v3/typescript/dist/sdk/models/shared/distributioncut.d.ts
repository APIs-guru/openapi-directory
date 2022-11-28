import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleMonitoringV3Range } from "./googlemonitoringv3range";
/**
 * A DistributionCut defines a TimeSeries and thresholds used for measuring good service and total service. The TimeSeries must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE. The computed good_service will be the estimated count of values in the Distribution that fall within the specified min and max.
**/
export declare class DistributionCut extends SpeakeasyBase {
    distributionFilter?: string;
    range?: GoogleMonitoringV3Range;
}
