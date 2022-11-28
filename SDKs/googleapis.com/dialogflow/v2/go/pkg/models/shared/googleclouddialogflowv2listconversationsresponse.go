package shared

// GoogleCloudDialogflowV2ListConversationsResponse
// The response message for Conversations.ListConversations.
type GoogleCloudDialogflowV2ListConversationsResponse struct {
	Conversations []GoogleCloudDialogflowV2Conversation `json:"conversations,omitempty"`
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
}
