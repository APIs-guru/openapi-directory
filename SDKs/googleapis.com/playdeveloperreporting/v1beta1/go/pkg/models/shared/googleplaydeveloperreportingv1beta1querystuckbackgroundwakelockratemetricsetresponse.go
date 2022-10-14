package shared

type GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse struct {
	NextPageToken *string                                         `json:"nextPageToken,omitempty"`
	Rows          []GooglePlayDeveloperReportingV1beta1MetricsRow `json:"rows,omitempty"`
}
