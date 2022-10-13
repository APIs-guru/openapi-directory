package shared

type GoogleCloudDialogflowV2ListConversationProfilesResponse struct {
	ConversationProfiles []GoogleCloudDialogflowV2ConversationProfile `json:"conversationProfiles"`
	NextPageToken        *string                                      `json:"nextPageToken"`
}
