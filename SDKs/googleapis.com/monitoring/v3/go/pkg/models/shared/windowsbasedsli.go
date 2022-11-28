package shared

// WindowsBasedSli
// A WindowsBasedSli defines good_service as the count of time windows for which the provided service was of good quality. Criteria for determining if service was good are embedded in the window_criterion.
type WindowsBasedSli struct {
	GoodBadMetricFilter     *string               `json:"goodBadMetricFilter,omitempty"`
	GoodTotalRatioThreshold *PerformanceThreshold `json:"goodTotalRatioThreshold,omitempty"`
	MetricMeanInRange       *MetricRange          `json:"metricMeanInRange,omitempty"`
	MetricSumInRange        *MetricRange          `json:"metricSumInRange,omitempty"`
	WindowPeriod            *string               `json:"windowPeriod,omitempty"`
}
