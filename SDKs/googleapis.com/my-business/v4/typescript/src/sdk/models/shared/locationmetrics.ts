import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricValue } from "./metricvalue";


// LocationMetrics
/** 
 * A series of Metrics and BreakdownMetrics associated with a Location over some time range.
**/
export class LocationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationName" })
  locationName?: string;

  @Metadata({ data: "json, name=metricValues", elemType: shared.MetricValue })
  metricValues?: MetricValue[];

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
