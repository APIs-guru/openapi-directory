import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeSeriesRatio
/** 
 * A TimeSeriesRatio specifies two TimeSeries to use for computing the good_service / total_service ratio. The specified TimeSeries must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. The TimeSeriesRatio must specify exactly two of good, bad, and total, and the relationship good_service + bad_service = total_service will be assumed.
**/
export class TimeSeriesRatio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badServiceFilter" })
  badServiceFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=goodServiceFilter" })
  goodServiceFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=totalServiceFilter" })
  totalServiceFilter?: string;
}
