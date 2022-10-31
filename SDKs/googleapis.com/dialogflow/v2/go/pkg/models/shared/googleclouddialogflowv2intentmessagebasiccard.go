package shared



type GoogleCloudDialogflowV2IntentMessageBasicCard struct {
    Buttons []GoogleCloudDialogflowV2IntentMessageBasicCardButton `json:"buttons,omitempty"`
    FormattedText *string `json:"formattedText,omitempty"`
    Image *GoogleCloudDialogflowV2IntentMessageImage `json:"image,omitempty"`
    Subtitle *string `json:"subtitle,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

