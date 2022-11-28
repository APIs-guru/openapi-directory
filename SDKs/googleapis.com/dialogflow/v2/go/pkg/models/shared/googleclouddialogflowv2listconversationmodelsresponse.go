package shared

// GoogleCloudDialogflowV2ListConversationModelsResponse
// The response message for ConversationModels.ListConversationModels
type GoogleCloudDialogflowV2ListConversationModelsResponse struct {
	ConversationModels []GoogleCloudDialogflowV2ConversationModel `json:"conversationModels,omitempty"`
	NextPageToken      *string                                    `json:"nextPageToken,omitempty"`
}
