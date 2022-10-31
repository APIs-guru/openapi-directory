package shared



type GooglePlayDeveloperReportingV1beta1Anomaly struct {
    Dimensions []GooglePlayDeveloperReportingV1beta1DimensionValue `json:"dimensions,omitempty"`
    Metric *GooglePlayDeveloperReportingV1beta1MetricValue `json:"metric,omitempty"`
    MetricSet *string `json:"metricSet,omitempty"`
    Name *string `json:"name,omitempty"`
    TimelineSpec *GooglePlayDeveloperReportingV1beta1TimelineSpec `json:"timelineSpec,omitempty"`
    
}

