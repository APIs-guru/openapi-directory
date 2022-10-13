package shared

type TimeSeriesFilter struct {
	Aggregation                 *Aggregation                 `json:"aggregation"`
	Filter                      *string                      `json:"filter"`
	PickTimeSeriesFilter        *PickTimeSeriesFilter        `json:"pickTimeSeriesFilter"`
	SecondaryAggregation        *Aggregation                 `json:"secondaryAggregation"`
	StatisticalTimeSeriesFilter *StatisticalTimeSeriesFilter `json:"statisticalTimeSeriesFilter"`
}
