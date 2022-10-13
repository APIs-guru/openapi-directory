package shared

type GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse struct {
	NextPageToken *string                                         `json:"nextPageToken"`
	Rows          []GooglePlayDeveloperReportingV1beta1MetricsRow `json:"rows"`
}
