package shared

// GoogleCloudDialogflowV2beta1ListMessagesResponse
// The response message for Conversations.ListMessages.
type GoogleCloudDialogflowV2beta1ListMessagesResponse struct {
	Messages      []GoogleCloudDialogflowV2beta1Message `json:"messages,omitempty"`
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
}
