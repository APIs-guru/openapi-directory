package shared

type GoogleCloudDialogflowV2ListDocumentsResponse struct {
	Documents     []GoogleCloudDialogflowV2Document `json:"documents"`
	NextPageToken *string                           `json:"nextPageToken"`
}
