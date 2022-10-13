package shared

type GoogleCloudDialogflowV2ListConversationModelsResponse struct {
	ConversationModels []GoogleCloudDialogflowV2ConversationModel `json:"conversationModels"`
	NextPageToken      *string                                    `json:"nextPageToken"`
}
