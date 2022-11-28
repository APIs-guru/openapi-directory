import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricsScope } from "./metricsscope";



// ListMetricsScopesByMonitoredProjectResponse
/** 
 * Response for the ListMetricsScopesByMonitoredProject method.
**/
export class ListMetricsScopesByMonitoredProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricsScopes", elemType: MetricsScope })
  metricsScopes?: MetricsScope[];
}
