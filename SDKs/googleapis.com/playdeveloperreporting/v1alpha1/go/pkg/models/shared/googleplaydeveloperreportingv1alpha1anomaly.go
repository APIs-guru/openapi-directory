package shared

type GooglePlayDeveloperReportingV1alpha1Anomaly struct {
	Dimensions   []GooglePlayDeveloperReportingV1alpha1DimensionValue `json:"dimensions"`
	Metric       *GooglePlayDeveloperReportingV1alpha1MetricValue     `json:"metric"`
	MetricSet    *string                                              `json:"metricSet"`
	Name         *string                                              `json:"name"`
	TimelineSpec *GooglePlayDeveloperReportingV1alpha1TimelineSpec    `json:"timelineSpec"`
}
