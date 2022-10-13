package shared

type GoogleCloudDialogflowV2ListVersionsResponse struct {
	NextPageToken *string                          `json:"nextPageToken"`
	Versions      []GoogleCloudDialogflowV2Version `json:"versions"`
}
