package shared

type GoogleCloudDialogflowV2IntentMessageTableCard struct {
	Buttons          []GoogleCloudDialogflowV2IntentMessageBasicCardButton  `json:"buttons"`
	ColumnProperties []GoogleCloudDialogflowV2IntentMessageColumnProperties `json:"columnProperties"`
	Image            *GoogleCloudDialogflowV2IntentMessageImage             `json:"image"`
	Rows             []GoogleCloudDialogflowV2IntentMessageTableCardRow     `json:"rows"`
	Subtitle         *string                                                `json:"subtitle"`
	Title            *string                                                `json:"title"`
}
