import { SpeakeasyBase } from "../../../internal/utils";
import { RatioPart } from "./ratiopart";
import { PickTimeSeriesFilter } from "./picktimeseriesfilter";
import { Aggregation } from "./aggregation";
import { StatisticalTimeSeriesFilter } from "./statisticaltimeseriesfilter";
/**
 * A pair of time series filters that define a ratio computation. The output time series is the pair-wise division of each aligned element from the numerator and denominator time series.
**/
export declare class TimeSeriesFilterRatio extends SpeakeasyBase {
    denominator?: RatioPart;
    numerator?: RatioPart;
    pickTimeSeriesFilter?: PickTimeSeriesFilter;
    secondaryAggregation?: Aggregation;
    statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter;
}
