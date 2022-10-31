package shared

type GoogleCloudDialogflowCxV3ListChangelogsResponse struct {
	Changelogs    []GoogleCloudDialogflowCxV3Changelog `json:"changelogs,omitempty"`
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
}
