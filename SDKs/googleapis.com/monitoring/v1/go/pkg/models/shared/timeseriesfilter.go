package shared

// TimeSeriesFilter
// A filter that defines a subset of time series data that is displayed in a widget. Time series data is fetched using the ListTimeSeries (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) method.
type TimeSeriesFilter struct {
	Aggregation                 *Aggregation                 `json:"aggregation,omitempty"`
	Filter                      *string                      `json:"filter,omitempty"`
	PickTimeSeriesFilter        *PickTimeSeriesFilter        `json:"pickTimeSeriesFilter,omitempty"`
	SecondaryAggregation        *Aggregation                 `json:"secondaryAggregation,omitempty"`
	StatisticalTimeSeriesFilter *StatisticalTimeSeriesFilter `json:"statisticalTimeSeriesFilter,omitempty"`
}
