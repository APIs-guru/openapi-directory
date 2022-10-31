package shared

type StatisticalTimeSeriesFilterRankingMethodEnum string

const (
	StatisticalTimeSeriesFilterRankingMethodEnumMethodUnspecified    StatisticalTimeSeriesFilterRankingMethodEnum = "METHOD_UNSPECIFIED"
	StatisticalTimeSeriesFilterRankingMethodEnumMethodClusterOutlier StatisticalTimeSeriesFilterRankingMethodEnum = "METHOD_CLUSTER_OUTLIER"
)

type StatisticalTimeSeriesFilter struct {
	NumTimeSeries *int32                                        `json:"numTimeSeries,omitempty"`
	RankingMethod *StatisticalTimeSeriesFilterRankingMethodEnum `json:"rankingMethod,omitempty"`
}
