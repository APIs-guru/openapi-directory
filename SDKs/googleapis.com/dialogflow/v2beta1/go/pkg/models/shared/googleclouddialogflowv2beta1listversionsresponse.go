package shared

type GoogleCloudDialogflowV2beta1ListVersionsResponse struct {
	NextPageToken *string                               `json:"nextPageToken"`
	Versions      []GoogleCloudDialogflowV2beta1Version `json:"versions"`
}
