package shared

type GoogleCloudDialogflowV2ListConversationDatasetsResponse struct {
	ConversationDatasets []GoogleCloudDialogflowV2ConversationDataset `json:"conversationDatasets"`
	NextPageToken        *string                                      `json:"nextPageToken"`
}
