package shared

// GooglePlayDeveloperReportingV1beta1Anomaly
// Represents an anomaly detected in a dataset. Our anomaly detection systems flag datapoints in a time series that fall outside of and expected range derived from historical data. Although those expected ranges have an upper and a lower bound, we only flag anomalies when the data has become unexpectedly _worse_, which usually corresponds to the case where the metric crosses the upper bound. Multiple contiguous datapoints in a timeline outside of the expected range will be grouped into a single anomaly. Therefore, an anomaly represents effectively a segment of a metric's timeline. The information stored in the `timeline_spec`, `dimensions` and `metric` can be used to fetch a full timeline with extended ragne for context. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
type GooglePlayDeveloperReportingV1beta1Anomaly struct {
	Dimensions   []GooglePlayDeveloperReportingV1beta1DimensionValue `json:"dimensions,omitempty"`
	Metric       *GooglePlayDeveloperReportingV1beta1MetricValue     `json:"metric,omitempty"`
	MetricSet    *string                                             `json:"metricSet,omitempty"`
	Name         *string                                             `json:"name,omitempty"`
	TimelineSpec *GooglePlayDeveloperReportingV1beta1TimelineSpec    `json:"timelineSpec,omitempty"`
}
