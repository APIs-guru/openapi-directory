import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricValue } from "./metricvalue";


// MetricValueSet
/** 
 * Represents a set of metric values in the same metric. Each metric value in the set should have a unique combination of start time, end time, and label values.
**/
export class MetricValueSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricName" })
  metricName?: string;

  @Metadata({ data: "json, name=metricValues", elemType: shared.MetricValue })
  metricValues?: MetricValue[];
}
