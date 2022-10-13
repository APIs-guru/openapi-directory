package shared

type GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse struct {
	ErrorIssues   []GooglePlayDeveloperReportingV1alpha1ErrorIssue `json:"errorIssues"`
	NextPageToken *string                                          `json:"nextPageToken"`
}
