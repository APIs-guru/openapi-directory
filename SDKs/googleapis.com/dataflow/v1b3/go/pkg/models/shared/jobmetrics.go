package shared



type JobMetrics struct {
    MetricTime *string `json:"metricTime,omitempty"`
    Metrics []MetricUpdate `json:"metrics,omitempty"`
    
}

