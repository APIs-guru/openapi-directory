package shared

// GoogleCloudDialogflowV2ListConversationDatasetsResponse
// The response message for ConversationDatasets.ListConversationDatasets.
type GoogleCloudDialogflowV2ListConversationDatasetsResponse struct {
	ConversationDatasets []GoogleCloudDialogflowV2ConversationDataset `json:"conversationDatasets,omitempty"`
	NextPageToken        *string                                      `json:"nextPageToken,omitempty"`
}
