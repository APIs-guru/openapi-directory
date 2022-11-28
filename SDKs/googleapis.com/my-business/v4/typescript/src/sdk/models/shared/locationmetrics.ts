import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";



// LocationMetrics
/** 
 * A series of Metrics and BreakdownMetrics associated with a Location over some time range.
**/
export class LocationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locationName" })
  locationName?: string;

  @SpeakeasyMetadata({ data: "json, name=metricValues", elemType: MetricValue })
  metricValues?: MetricValue[];

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
