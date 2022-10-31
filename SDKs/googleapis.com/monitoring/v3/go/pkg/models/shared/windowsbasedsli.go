package shared



type WindowsBasedSli struct {
    GoodBadMetricFilter *string `json:"goodBadMetricFilter,omitempty"`
    GoodTotalRatioThreshold *PerformanceThreshold `json:"goodTotalRatioThreshold,omitempty"`
    MetricMeanInRange *MetricRange `json:"metricMeanInRange,omitempty"`
    MetricSumInRange *MetricRange `json:"metricSumInRange,omitempty"`
    WindowPeriod *string `json:"windowPeriod,omitempty"`
    
}

