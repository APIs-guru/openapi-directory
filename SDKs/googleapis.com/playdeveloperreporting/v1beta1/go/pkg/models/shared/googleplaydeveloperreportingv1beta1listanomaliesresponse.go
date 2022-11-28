package shared

// GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse
// Response with a list of anomalies in datasets.
type GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse struct {
	Anomalies     []GooglePlayDeveloperReportingV1beta1Anomaly `json:"anomalies,omitempty"`
	NextPageToken *string                                      `json:"nextPageToken,omitempty"`
}
