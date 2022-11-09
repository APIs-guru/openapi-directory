import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Aggregation } from "./aggregation";
import { PickTimeSeriesFilter } from "./picktimeseriesfilter";
import { Aggregation } from "./aggregation";
import { StatisticalTimeSeriesFilter } from "./statisticaltimeseriesfilter";


// TimeSeriesFilter
/** 
 * A filter that defines a subset of time series data that is displayed in a widget. Time series data is fetched using the ListTimeSeries (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) method.
**/
export class TimeSeriesFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregation" })
  aggregation?: Aggregation;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=pickTimeSeriesFilter" })
  pickTimeSeriesFilter?: PickTimeSeriesFilter;

  @Metadata({ data: "json, name=secondaryAggregation" })
  secondaryAggregation?: Aggregation;

  @Metadata({ data: "json, name=statisticalTimeSeriesFilter" })
  statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter;
}
