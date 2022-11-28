package shared

type StatisticalTimeSeriesFilterRankingMethodEnum string

const (
	StatisticalTimeSeriesFilterRankingMethodEnumMethodUnspecified    StatisticalTimeSeriesFilterRankingMethodEnum = "METHOD_UNSPECIFIED"
	StatisticalTimeSeriesFilterRankingMethodEnumMethodClusterOutlier StatisticalTimeSeriesFilterRankingMethodEnum = "METHOD_CLUSTER_OUTLIER"
)

// StatisticalTimeSeriesFilter
// A filter that ranks streams based on their statistical relation to other streams in a request. Note: This field is deprecated and completely ignored by the API.
type StatisticalTimeSeriesFilter struct {
	NumTimeSeries *int32                                        `json:"numTimeSeries,omitempty"`
	RankingMethod *StatisticalTimeSeriesFilterRankingMethodEnum `json:"rankingMethod,omitempty"`
}
