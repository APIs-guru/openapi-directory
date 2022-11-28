import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeDimension } from "./timedimension";


export enum DimensionalMetricValueMetricOptionEnum {
    MetricOptionUnspecified = "METRIC_OPTION_UNSPECIFIED",
    AggregatedTotal = "AGGREGATED_TOTAL",
    AggregatedDaily = "AGGREGATED_DAILY",
    BreakdownDayOfWeek = "BREAKDOWN_DAY_OF_WEEK",
    BreakdownHourOfDay = "BREAKDOWN_HOUR_OF_DAY"
}


// DimensionalMetricValue
/** 
 * A value for a single metric with a given time dimension.
**/
export class DimensionalMetricValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricOption" })
  metricOption?: DimensionalMetricValueMetricOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=timeDimension" })
  timeDimension?: TimeDimension;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
