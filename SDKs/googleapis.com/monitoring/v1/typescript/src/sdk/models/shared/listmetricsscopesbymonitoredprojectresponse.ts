import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricsScope } from "./metricsscope";


// ListMetricsScopesByMonitoredProjectResponse
/** 
 * Response for the ListMetricsScopesByMonitoredProject method.
**/
export class ListMetricsScopesByMonitoredProjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricsScopes", elemType: shared.MetricsScope })
  metricsScopes?: MetricsScope[];
}
