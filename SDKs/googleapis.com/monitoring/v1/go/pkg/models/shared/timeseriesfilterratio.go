package shared

type TimeSeriesFilterRatio struct {
	Denominator                 *RatioPart                   `json:"denominator,omitempty"`
	Numerator                   *RatioPart                   `json:"numerator,omitempty"`
	PickTimeSeriesFilter        *PickTimeSeriesFilter        `json:"pickTimeSeriesFilter,omitempty"`
	SecondaryAggregation        *Aggregation                 `json:"secondaryAggregation,omitempty"`
	StatisticalTimeSeriesFilter *StatisticalTimeSeriesFilter `json:"statisticalTimeSeriesFilter,omitempty"`
}
