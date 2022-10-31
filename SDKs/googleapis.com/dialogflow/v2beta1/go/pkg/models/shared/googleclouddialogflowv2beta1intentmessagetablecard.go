package shared

type GoogleCloudDialogflowV2beta1IntentMessageTableCard struct {
	Buttons          []GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton  `json:"buttons,omitempty"`
	ColumnProperties []GoogleCloudDialogflowV2beta1IntentMessageColumnProperties `json:"columnProperties,omitempty"`
	Image            *GoogleCloudDialogflowV2beta1IntentMessageImage             `json:"image,omitempty"`
	Rows             []GoogleCloudDialogflowV2beta1IntentMessageTableCardRow     `json:"rows,omitempty"`
	Subtitle         *string                                                     `json:"subtitle,omitempty"`
	Title            *string                                                     `json:"title,omitempty"`
}
