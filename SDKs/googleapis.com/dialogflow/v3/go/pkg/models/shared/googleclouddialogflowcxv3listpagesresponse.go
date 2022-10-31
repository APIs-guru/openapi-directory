package shared

type GoogleCloudDialogflowCxV3ListPagesResponse struct {
	NextPageToken *string                         `json:"nextPageToken,omitempty"`
	Pages         []GoogleCloudDialogflowCxV3Page `json:"pages,omitempty"`
}
