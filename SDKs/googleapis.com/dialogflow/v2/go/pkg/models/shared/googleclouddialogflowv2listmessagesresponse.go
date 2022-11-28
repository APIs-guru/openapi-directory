package shared

// GoogleCloudDialogflowV2ListMessagesResponse
// The response message for Conversations.ListMessages.
type GoogleCloudDialogflowV2ListMessagesResponse struct {
	Messages      []GoogleCloudDialogflowV2Message `json:"messages,omitempty"`
	NextPageToken *string                          `json:"nextPageToken,omitempty"`
}
