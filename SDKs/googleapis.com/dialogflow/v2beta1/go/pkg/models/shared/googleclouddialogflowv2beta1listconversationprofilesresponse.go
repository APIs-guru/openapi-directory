package shared

type GoogleCloudDialogflowV2beta1ListConversationProfilesResponse struct {
	ConversationProfiles []GoogleCloudDialogflowV2beta1ConversationProfile `json:"conversationProfiles,omitempty"`
	NextPageToken        *string                                           `json:"nextPageToken,omitempty"`
}
