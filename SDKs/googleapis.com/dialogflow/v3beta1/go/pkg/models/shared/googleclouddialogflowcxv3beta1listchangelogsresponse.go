package shared

type GoogleCloudDialogflowCxV3beta1ListChangelogsResponse struct {
	Changelogs    []GoogleCloudDialogflowCxV3beta1Changelog `json:"changelogs"`
	NextPageToken *string                                   `json:"nextPageToken"`
}
