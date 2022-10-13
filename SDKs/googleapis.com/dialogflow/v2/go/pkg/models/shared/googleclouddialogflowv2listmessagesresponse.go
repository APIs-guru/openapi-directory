package shared

type GoogleCloudDialogflowV2ListMessagesResponse struct {
	Messages      []GoogleCloudDialogflowV2Message `json:"messages"`
	NextPageToken *string                          `json:"nextPageToken"`
}
