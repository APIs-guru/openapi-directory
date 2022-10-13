package shared

type GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse struct {
	NextPageToken *string                                          `json:"nextPageToken"`
	Rows          []GooglePlayDeveloperReportingV1alpha1MetricsRow `json:"rows"`
}
