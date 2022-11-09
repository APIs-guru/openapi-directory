import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeSeriesRatio
/** 
 * A TimeSeriesRatio specifies two TimeSeries to use for computing the good_service / total_service ratio. The specified TimeSeries must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. The TimeSeriesRatio must specify exactly two of good, bad, and total, and the relationship good_service + bad_service = total_service will be assumed.
**/
export class TimeSeriesRatio extends SpeakeasyBase {
  @Metadata({ data: "json, name=badServiceFilter" })
  badServiceFilter?: string;

  @Metadata({ data: "json, name=goodServiceFilter" })
  goodServiceFilter?: string;

  @Metadata({ data: "json, name=totalServiceFilter" })
  totalServiceFilter?: string;
}
