package shared

// GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse
// Response with a paginated list of error reports matching the search query.
type GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse struct {
	ErrorReports  []GooglePlayDeveloperReportingV1alpha1ErrorReport `json:"errorReports,omitempty"`
	NextPageToken *string                                           `json:"nextPageToken,omitempty"`
}
