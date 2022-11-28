package shared

// TimeSeriesFilterRatio
// A pair of time series filters that define a ratio computation. The output time series is the pair-wise division of each aligned element from the numerator and denominator time series.
type TimeSeriesFilterRatio struct {
	Denominator                 *RatioPart                   `json:"denominator,omitempty"`
	Numerator                   *RatioPart                   `json:"numerator,omitempty"`
	PickTimeSeriesFilter        *PickTimeSeriesFilter        `json:"pickTimeSeriesFilter,omitempty"`
	SecondaryAggregation        *Aggregation                 `json:"secondaryAggregation,omitempty"`
	StatisticalTimeSeriesFilter *StatisticalTimeSeriesFilter `json:"statisticalTimeSeriesFilter,omitempty"`
}
