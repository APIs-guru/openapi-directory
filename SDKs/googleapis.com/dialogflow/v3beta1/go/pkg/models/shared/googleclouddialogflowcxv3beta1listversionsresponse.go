package shared

type GoogleCloudDialogflowCxV3beta1ListVersionsResponse struct {
	NextPageToken *string                                 `json:"nextPageToken"`
	Versions      []GoogleCloudDialogflowCxV3beta1Version `json:"versions"`
}
