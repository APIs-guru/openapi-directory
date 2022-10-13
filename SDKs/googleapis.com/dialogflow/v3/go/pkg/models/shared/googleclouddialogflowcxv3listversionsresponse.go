package shared

type GoogleCloudDialogflowCxV3ListVersionsResponse struct {
	NextPageToken *string                            `json:"nextPageToken"`
	Versions      []GoogleCloudDialogflowCxV3Version `json:"versions"`
}
