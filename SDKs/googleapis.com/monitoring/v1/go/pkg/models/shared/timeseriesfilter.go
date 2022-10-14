package shared

type TimeSeriesFilter struct {
	Aggregation                 *Aggregation                 `json:"aggregation,omitempty"`
	Filter                      *string                      `json:"filter,omitempty"`
	PickTimeSeriesFilter        *PickTimeSeriesFilter        `json:"pickTimeSeriesFilter,omitempty"`
	SecondaryAggregation        *Aggregation                 `json:"secondaryAggregation,omitempty"`
	StatisticalTimeSeriesFilter *StatisticalTimeSeriesFilter `json:"statisticalTimeSeriesFilter,omitempty"`
}
