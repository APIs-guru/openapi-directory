package shared



type GoogleCloudDialogflowV2IntentMessageTableCard struct {
    Buttons []GoogleCloudDialogflowV2IntentMessageBasicCardButton `json:"buttons,omitempty"`
    ColumnProperties []GoogleCloudDialogflowV2IntentMessageColumnProperties `json:"columnProperties,omitempty"`
    Image *GoogleCloudDialogflowV2IntentMessageImage `json:"image,omitempty"`
    Rows []GoogleCloudDialogflowV2IntentMessageTableCardRow `json:"rows,omitempty"`
    Subtitle *string `json:"subtitle,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

