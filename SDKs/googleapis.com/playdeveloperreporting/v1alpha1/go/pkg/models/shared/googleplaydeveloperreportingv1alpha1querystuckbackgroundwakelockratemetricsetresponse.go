package shared

// GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse
// Response message for QueryStuckBackgroundWakelockRateMetricSet.
type GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse struct {
	NextPageToken *string                                          `json:"nextPageToken,omitempty"`
	Rows          []GooglePlayDeveloperReportingV1alpha1MetricsRow `json:"rows,omitempty"`
}
