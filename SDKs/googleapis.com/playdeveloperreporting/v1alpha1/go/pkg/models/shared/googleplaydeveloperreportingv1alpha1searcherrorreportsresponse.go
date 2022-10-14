package shared

type GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse struct {
	ErrorReports  []GooglePlayDeveloperReportingV1alpha1ErrorReport `json:"errorReports,omitempty"`
	NextPageToken *string                                           `json:"nextPageToken,omitempty"`
}
