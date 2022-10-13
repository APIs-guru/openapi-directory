package shared

type GoogleCloudDialogflowCxV3ListChangelogsResponse struct {
	Changelogs    []GoogleCloudDialogflowCxV3Changelog `json:"changelogs"`
	NextPageToken *string                              `json:"nextPageToken"`
}
