package shared

// GoogleCloudDialogflowCxV3beta1ListPagesResponse
// The response message for Pages.ListPages.
type GoogleCloudDialogflowCxV3beta1ListPagesResponse struct {
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
	Pages         []GoogleCloudDialogflowCxV3beta1Page `json:"pages,omitempty"`
}
