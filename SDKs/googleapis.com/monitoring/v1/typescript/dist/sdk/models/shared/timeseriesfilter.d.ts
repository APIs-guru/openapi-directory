import { SpeakeasyBase } from "../../../internal/utils";
import { Aggregation } from "./aggregation";
import { PickTimeSeriesFilter } from "./picktimeseriesfilter";
import { StatisticalTimeSeriesFilter } from "./statisticaltimeseriesfilter";
/**
 * A filter that defines a subset of time series data that is displayed in a widget. Time series data is fetched using the ListTimeSeries (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) method.
**/
export declare class TimeSeriesFilter extends SpeakeasyBase {
    aggregation?: Aggregation;
    filter?: string;
    pickTimeSeriesFilter?: PickTimeSeriesFilter;
    secondaryAggregation?: Aggregation;
    statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter;
}
