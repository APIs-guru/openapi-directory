package shared

// GoogleCloudDialogflowCxV3ListChangelogsResponse
// The response message for Changelogs.ListChangelogs.
type GoogleCloudDialogflowCxV3ListChangelogsResponse struct {
	Changelogs    []GoogleCloudDialogflowCxV3Changelog `json:"changelogs,omitempty"`
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
}
