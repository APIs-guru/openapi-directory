package shared

type GoogleCloudDialogflowCxV3ListPagesResponse struct {
	NextPageToken *string                         `json:"nextPageToken"`
	Pages         []GoogleCloudDialogflowCxV3Page `json:"pages"`
}
