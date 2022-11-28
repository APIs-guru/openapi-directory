import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSeriesFilter } from "./timeseriesfilter";
import { TimeSeriesFilterRatio } from "./timeseriesfilterratio";
/**
 * TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API.
**/
export declare class TimeSeriesQuery extends SpeakeasyBase {
    prometheusQuery?: string;
    timeSeriesFilter?: TimeSeriesFilter;
    timeSeriesFilterRatio?: TimeSeriesFilterRatio;
    timeSeriesQueryLanguage?: string;
    unitOverride?: string;
}
