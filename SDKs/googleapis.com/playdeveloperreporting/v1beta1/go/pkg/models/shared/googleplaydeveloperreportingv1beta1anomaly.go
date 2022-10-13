package shared

type GooglePlayDeveloperReportingV1beta1Anomaly struct {
	Dimensions   []GooglePlayDeveloperReportingV1beta1DimensionValue `json:"dimensions"`
	Metric       *GooglePlayDeveloperReportingV1beta1MetricValue     `json:"metric"`
	MetricSet    *string                                             `json:"metricSet"`
	Name         *string                                             `json:"name"`
	TimelineSpec *GooglePlayDeveloperReportingV1beta1TimelineSpec    `json:"timelineSpec"`
}
