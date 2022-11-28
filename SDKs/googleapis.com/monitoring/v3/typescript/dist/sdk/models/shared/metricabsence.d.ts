import { SpeakeasyBase } from "../../../internal/utils";
import { Aggregation } from "./aggregation";
import { Trigger } from "./trigger";
/**
 * A condition type that checks that monitored resources are reporting data. The configuration defines a metric and a set of monitored resources. The predicate is considered in violation when a time series for the specified metric of a monitored resource does not include any data in the specified duration.
**/
export declare class MetricAbsence extends SpeakeasyBase {
    aggregations?: Aggregation[];
    duration?: string;
    filter?: string;
    trigger?: Trigger;
}
