import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Aggregation } from "./aggregation";
import { Trigger } from "./trigger";



// MetricAbsence
/** 
 * A condition type that checks that monitored resources are reporting data. The configuration defines a metric and a set of monitored resources. The predicate is considered in violation when a time series for the specified metric of a monitored resource does not include any data in the specified duration.
**/
export class MetricAbsence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregations", elemType: Aggregation })
  aggregations?: Aggregation[];

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger?: Trigger;
}
