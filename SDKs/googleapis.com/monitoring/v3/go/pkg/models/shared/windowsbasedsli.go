package shared

type WindowsBasedSli struct {
	GoodBadMetricFilter     *string               `json:"goodBadMetricFilter"`
	GoodTotalRatioThreshold *PerformanceThreshold `json:"goodTotalRatioThreshold"`
	MetricMeanInRange       *MetricRange          `json:"metricMeanInRange"`
	MetricSumInRange        *MetricRange          `json:"metricSumInRange"`
	WindowPeriod            *string               `json:"windowPeriod"`
}
