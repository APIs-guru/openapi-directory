package shared

// GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse
// Response with a list of anomalies in datasets.
type GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse struct {
	Anomalies     []GooglePlayDeveloperReportingV1alpha1Anomaly `json:"anomalies,omitempty"`
	NextPageToken *string                                       `json:"nextPageToken,omitempty"`
}
