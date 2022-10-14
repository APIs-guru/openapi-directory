package shared

type GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse struct {
	Anomalies     []GooglePlayDeveloperReportingV1alpha1Anomaly `json:"anomalies,omitempty"`
	NextPageToken *string                                       `json:"nextPageToken,omitempty"`
}
