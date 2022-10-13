package shared

type GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse struct {
	Anomalies     []GooglePlayDeveloperReportingV1beta1Anomaly `json:"anomalies"`
	NextPageToken *string                                      `json:"nextPageToken"`
}
