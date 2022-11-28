package shared

// GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse
// Response with a paginated list of issues that matched the request.
type GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse struct {
	ErrorIssues   []GooglePlayDeveloperReportingV1alpha1ErrorIssue `json:"errorIssues,omitempty"`
	NextPageToken *string                                          `json:"nextPageToken,omitempty"`
}
