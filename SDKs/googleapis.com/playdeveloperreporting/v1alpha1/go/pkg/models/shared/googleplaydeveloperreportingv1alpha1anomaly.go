package shared



type GooglePlayDeveloperReportingV1alpha1Anomaly struct {
    Dimensions []GooglePlayDeveloperReportingV1alpha1DimensionValue `json:"dimensions,omitempty"`
    Metric *GooglePlayDeveloperReportingV1alpha1MetricValue `json:"metric,omitempty"`
    MetricSet *string `json:"metricSet,omitempty"`
    Name *string `json:"name,omitempty"`
    TimelineSpec *GooglePlayDeveloperReportingV1alpha1TimelineSpec `json:"timelineSpec,omitempty"`
    
}

