package shared

type LocationMetrics struct {
	LocationName *string       `json:"locationName"`
	MetricValues []MetricValue `json:"metricValues"`
	TimeZone     *string       `json:"timeZone"`
}
