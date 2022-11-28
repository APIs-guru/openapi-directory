package shared

// GoogleCloudDialogflowCxV3ListPagesResponse
// The response message for Pages.ListPages.
type GoogleCloudDialogflowCxV3ListPagesResponse struct {
	NextPageToken *string                         `json:"nextPageToken,omitempty"`
	Pages         []GoogleCloudDialogflowCxV3Page `json:"pages,omitempty"`
}
