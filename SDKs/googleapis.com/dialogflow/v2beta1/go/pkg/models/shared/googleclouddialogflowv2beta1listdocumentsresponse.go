package shared

type GoogleCloudDialogflowV2beta1ListDocumentsResponse struct {
	Documents     []GoogleCloudDialogflowV2beta1Document `json:"documents"`
	NextPageToken *string                                `json:"nextPageToken"`
}
