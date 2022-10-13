package shared

type GoogleCloudDialogflowV2beta1IntentMessageTableCard struct {
	Buttons          []GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton  `json:"buttons"`
	ColumnProperties []GoogleCloudDialogflowV2beta1IntentMessageColumnProperties `json:"columnProperties"`
	Image            *GoogleCloudDialogflowV2beta1IntentMessageImage             `json:"image"`
	Rows             []GoogleCloudDialogflowV2beta1IntentMessageTableCardRow     `json:"rows"`
	Subtitle         *string                                                     `json:"subtitle"`
	Title            *string                                                     `json:"title"`
}
