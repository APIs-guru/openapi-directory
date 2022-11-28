import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleMonitoringV3Range } from "./googlemonitoringv3range";



// MetricRange
/** 
 * A MetricRange is used when each window is good when the value x of a single TimeSeries satisfies range.min <= x <= range.max. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE.
**/
export class MetricRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GoogleMonitoringV3Range;

  @SpeakeasyMetadata({ data: "json, name=timeSeries" })
  timeSeries?: string;
}
