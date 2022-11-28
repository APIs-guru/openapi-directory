import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PickTimeSeriesFilterDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Top = "TOP",
    Bottom = "BOTTOM"
}
export declare enum PickTimeSeriesFilterRankingMethodEnum {
    MethodUnspecified = "METHOD_UNSPECIFIED",
    MethodMean = "METHOD_MEAN",
    MethodMax = "METHOD_MAX",
    MethodMin = "METHOD_MIN",
    MethodSum = "METHOD_SUM",
    MethodLatest = "METHOD_LATEST"
}
/**
 * Describes a ranking-based time series filter. Each input time series is ranked with an aligner. The filter will allow up to num_time_series time series to pass through it, selecting them based on the relative ranking.For example, if ranking_method is METHOD_MEAN,direction is BOTTOM, and num_time_series is 3, then the 3 times series with the lowest mean values will pass through the filter.
**/
export declare class PickTimeSeriesFilter extends SpeakeasyBase {
    direction?: PickTimeSeriesFilterDirectionEnum;
    numTimeSeries?: number;
    rankingMethod?: PickTimeSeriesFilterRankingMethodEnum;
}
