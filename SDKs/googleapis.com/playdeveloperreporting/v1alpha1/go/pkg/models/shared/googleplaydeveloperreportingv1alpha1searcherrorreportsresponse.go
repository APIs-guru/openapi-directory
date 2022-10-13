package shared

type GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse struct {
	ErrorReports  []GooglePlayDeveloperReportingV1alpha1ErrorReport `json:"errorReports"`
	NextPageToken *string                                           `json:"nextPageToken"`
}
