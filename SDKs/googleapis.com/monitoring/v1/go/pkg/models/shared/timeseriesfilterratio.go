package shared

type TimeSeriesFilterRatio struct {
	Denominator                 *RatioPart                   `json:"denominator"`
	Numerator                   *RatioPart                   `json:"numerator"`
	PickTimeSeriesFilter        *PickTimeSeriesFilter        `json:"pickTimeSeriesFilter"`
	SecondaryAggregation        *Aggregation                 `json:"secondaryAggregation"`
	StatisticalTimeSeriesFilter *StatisticalTimeSeriesFilter `json:"statisticalTimeSeriesFilter"`
}
