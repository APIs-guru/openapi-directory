package shared

type GoogleCloudDialogflowV2ListConversationDatasetsResponse struct {
	ConversationDatasets []GoogleCloudDialogflowV2ConversationDataset `json:"conversationDatasets,omitempty"`
	NextPageToken        *string                                      `json:"nextPageToken,omitempty"`
}
