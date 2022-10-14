package shared

type GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse struct {
	ErrorIssues   []GooglePlayDeveloperReportingV1alpha1ErrorIssue `json:"errorIssues,omitempty"`
	NextPageToken *string                                          `json:"nextPageToken,omitempty"`
}
