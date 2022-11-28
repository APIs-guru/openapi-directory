package shared

type PickTimeSeriesFilterDirectionEnum string

const (
	PickTimeSeriesFilterDirectionEnumDirectionUnspecified PickTimeSeriesFilterDirectionEnum = "DIRECTION_UNSPECIFIED"
	PickTimeSeriesFilterDirectionEnumTop                  PickTimeSeriesFilterDirectionEnum = "TOP"
	PickTimeSeriesFilterDirectionEnumBottom               PickTimeSeriesFilterDirectionEnum = "BOTTOM"
)

type PickTimeSeriesFilterRankingMethodEnum string

const (
	PickTimeSeriesFilterRankingMethodEnumMethodUnspecified PickTimeSeriesFilterRankingMethodEnum = "METHOD_UNSPECIFIED"
	PickTimeSeriesFilterRankingMethodEnumMethodMean        PickTimeSeriesFilterRankingMethodEnum = "METHOD_MEAN"
	PickTimeSeriesFilterRankingMethodEnumMethodMax         PickTimeSeriesFilterRankingMethodEnum = "METHOD_MAX"
	PickTimeSeriesFilterRankingMethodEnumMethodMin         PickTimeSeriesFilterRankingMethodEnum = "METHOD_MIN"
	PickTimeSeriesFilterRankingMethodEnumMethodSum         PickTimeSeriesFilterRankingMethodEnum = "METHOD_SUM"
	PickTimeSeriesFilterRankingMethodEnumMethodLatest      PickTimeSeriesFilterRankingMethodEnum = "METHOD_LATEST"
)

// PickTimeSeriesFilter
// Describes a ranking-based time series filter. Each input time series is ranked with an aligner. The filter will allow up to num_time_series time series to pass through it, selecting them based on the relative ranking.For example, if ranking_method is METHOD_MEAN,direction is BOTTOM, and num_time_series is 3, then the 3 times series with the lowest mean values will pass through the filter.
type PickTimeSeriesFilter struct {
	Direction     *PickTimeSeriesFilterDirectionEnum     `json:"direction,omitempty"`
	NumTimeSeries *int32                                 `json:"numTimeSeries,omitempty"`
	RankingMethod *PickTimeSeriesFilterRankingMethodEnum `json:"rankingMethod,omitempty"`
}
