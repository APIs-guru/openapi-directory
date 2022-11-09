import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleMonitoringV3Range } from "./googlemonitoringv3range";


// DistributionCut
/** 
 * A DistributionCut defines a TimeSeries and thresholds used for measuring good service and total service. The TimeSeries must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE. The computed good_service will be the estimated count of values in the Distribution that fall within the specified min and max.
**/
export class DistributionCut extends SpeakeasyBase {
  @Metadata({ data: "json, name=distributionFilter" })
  distributionFilter?: string;

  @Metadata({ data: "json, name=range" })
  range?: GoogleMonitoringV3Range;
}
