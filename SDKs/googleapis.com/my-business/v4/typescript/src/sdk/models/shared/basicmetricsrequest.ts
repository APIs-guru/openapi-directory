import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricRequest } from "./metricrequest";
import { TimeRange } from "./timerange";



// BasicMetricsRequest
/** 
 * A request for basic metric insights.
**/
export class BasicMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricRequests", elemType: MetricRequest })
  metricRequests?: MetricRequest[];

  @SpeakeasyMetadata({ data: "json, name=timeRange" })
  timeRange?: TimeRange;
}
