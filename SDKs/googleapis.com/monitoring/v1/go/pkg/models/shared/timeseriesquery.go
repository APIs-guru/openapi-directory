package shared

type TimeSeriesQuery struct {
	PrometheusQuery         *string                `json:"prometheusQuery"`
	TimeSeriesFilter        *TimeSeriesFilter      `json:"timeSeriesFilter"`
	TimeSeriesFilterRatio   *TimeSeriesFilterRatio `json:"timeSeriesFilterRatio"`
	TimeSeriesQueryLanguage *string                `json:"timeSeriesQueryLanguage"`
	UnitOverride            *string                `json:"unitOverride"`
}
