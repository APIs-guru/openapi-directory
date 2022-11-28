import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";



// MetricValueSet
/** 
 * Represents a set of metric values in the same metric. Each metric value in the set should have a unique combination of start time, end time, and label values.
**/
export class MetricValueSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=metricValues", elemType: MetricValue })
  metricValues?: MetricValue[];
}
