package shared

// TimeSeriesQuery
// TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API.
type TimeSeriesQuery struct {
	PrometheusQuery         *string                `json:"prometheusQuery,omitempty"`
	TimeSeriesFilter        *TimeSeriesFilter      `json:"timeSeriesFilter,omitempty"`
	TimeSeriesFilterRatio   *TimeSeriesFilterRatio `json:"timeSeriesFilterRatio,omitempty"`
	TimeSeriesQueryLanguage *string                `json:"timeSeriesQueryLanguage,omitempty"`
	UnitOverride            *string                `json:"unitOverride,omitempty"`
}
