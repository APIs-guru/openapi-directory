package shared



type GoogleCloudDialogflowV2ListConversationProfilesResponse struct {
    ConversationProfiles []GoogleCloudDialogflowV2ConversationProfile `json:"conversationProfiles,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

