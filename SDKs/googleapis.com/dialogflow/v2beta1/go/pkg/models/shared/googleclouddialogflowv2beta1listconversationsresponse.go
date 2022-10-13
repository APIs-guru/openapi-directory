package shared

type GoogleCloudDialogflowV2beta1ListConversationsResponse struct {
	Conversations []GoogleCloudDialogflowV2beta1Conversation `json:"conversations"`
	NextPageToken *string                                    `json:"nextPageToken"`
}
