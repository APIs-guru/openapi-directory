import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A TimeSeriesRatio specifies two TimeSeries to use for computing the good_service / total_service ratio. The specified TimeSeries must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. The TimeSeriesRatio must specify exactly two of good, bad, and total, and the relationship good_service + bad_service = total_service will be assumed.
**/
export declare class TimeSeriesRatio extends SpeakeasyBase {
    badServiceFilter?: string;
    goodServiceFilter?: string;
    totalServiceFilter?: string;
}
