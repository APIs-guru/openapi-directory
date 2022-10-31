package shared



type GoogleCloudDialogflowV2ListMessagesResponse struct {
    Messages []GoogleCloudDialogflowV2Message `json:"messages,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

