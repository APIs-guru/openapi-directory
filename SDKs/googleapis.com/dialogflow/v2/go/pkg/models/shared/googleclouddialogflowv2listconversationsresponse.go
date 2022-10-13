package shared

type GoogleCloudDialogflowV2ListConversationsResponse struct {
	Conversations []GoogleCloudDialogflowV2Conversation `json:"conversations"`
	NextPageToken *string                               `json:"nextPageToken"`
}
