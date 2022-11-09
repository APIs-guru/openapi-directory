import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricRequest } from "./metricrequest";
import { TimeRange } from "./timerange";


// BasicMetricsRequest
/** 
 * A request for basic metric insights.
**/
export class BasicMetricsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricRequests", elemType: shared.MetricRequest })
  metricRequests?: MetricRequest[];

  @Metadata({ data: "json, name=timeRange" })
  timeRange?: TimeRange;
}
