package shared



type GoogleCloudDialogflowV2ListConversationsResponse struct {
    Conversations []GoogleCloudDialogflowV2Conversation `json:"conversations,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

