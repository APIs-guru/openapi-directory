package shared

type GoogleCloudDialogflowV2ListConversationModelsResponse struct {
	ConversationModels []GoogleCloudDialogflowV2ConversationModel `json:"conversationModels,omitempty"`
	NextPageToken      *string                                    `json:"nextPageToken,omitempty"`
}
