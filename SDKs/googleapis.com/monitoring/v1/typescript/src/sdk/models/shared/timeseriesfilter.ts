import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Aggregation } from "./aggregation";
import { PickTimeSeriesFilter } from "./picktimeseriesfilter";
import { StatisticalTimeSeriesFilter } from "./statisticaltimeseriesfilter";



// TimeSeriesFilter
/** 
 * A filter that defines a subset of time series data that is displayed in a widget. Time series data is fetched using the ListTimeSeries (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) method.
**/
export class TimeSeriesFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregation" })
  aggregation?: Aggregation;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=pickTimeSeriesFilter" })
  pickTimeSeriesFilter?: PickTimeSeriesFilter;

  @SpeakeasyMetadata({ data: "json, name=secondaryAggregation" })
  secondaryAggregation?: Aggregation;

  @SpeakeasyMetadata({ data: "json, name=statisticalTimeSeriesFilter" })
  statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter;
}
