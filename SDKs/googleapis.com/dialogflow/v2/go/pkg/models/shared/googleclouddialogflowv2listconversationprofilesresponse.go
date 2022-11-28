package shared

// GoogleCloudDialogflowV2ListConversationProfilesResponse
// The response message for ConversationProfiles.ListConversationProfiles.
type GoogleCloudDialogflowV2ListConversationProfilesResponse struct {
	ConversationProfiles []GoogleCloudDialogflowV2ConversationProfile `json:"conversationProfiles,omitempty"`
	NextPageToken        *string                                      `json:"nextPageToken,omitempty"`
}
