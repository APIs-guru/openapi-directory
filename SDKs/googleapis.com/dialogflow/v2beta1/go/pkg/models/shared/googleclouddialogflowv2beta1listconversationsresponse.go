package shared

// GoogleCloudDialogflowV2beta1ListConversationsResponse
// The response message for Conversations.ListConversations.
type GoogleCloudDialogflowV2beta1ListConversationsResponse struct {
	Conversations []GoogleCloudDialogflowV2beta1Conversation `json:"conversations,omitempty"`
	NextPageToken *string                                    `json:"nextPageToken,omitempty"`
}
