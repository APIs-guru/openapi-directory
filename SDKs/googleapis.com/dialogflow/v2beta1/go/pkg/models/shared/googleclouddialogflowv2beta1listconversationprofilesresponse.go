package shared

type GoogleCloudDialogflowV2beta1ListConversationProfilesResponse struct {
	ConversationProfiles []GoogleCloudDialogflowV2beta1ConversationProfile `json:"conversationProfiles"`
	NextPageToken        *string                                           `json:"nextPageToken"`
}
