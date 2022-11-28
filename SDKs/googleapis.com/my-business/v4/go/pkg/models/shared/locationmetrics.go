package shared

// LocationMetrics
// A series of Metrics and BreakdownMetrics associated with a Location over some time range.
type LocationMetrics struct {
	LocationName *string       `json:"locationName,omitempty"`
	MetricValues []MetricValue `json:"metricValues,omitempty"`
	TimeZone     *string       `json:"timeZone,omitempty"`
}
