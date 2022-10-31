package shared



type LocationMetrics struct {
    LocationName *string `json:"locationName,omitempty"`
    MetricValues []MetricValue `json:"metricValues,omitempty"`
    TimeZone *string `json:"timeZone,omitempty"`
    
}

