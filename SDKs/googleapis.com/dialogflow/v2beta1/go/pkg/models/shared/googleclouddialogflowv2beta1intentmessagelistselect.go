package shared

// GoogleCloudDialogflowV2beta1IntentMessageListSelect
// The card for presenting a list of options to select from.
type GoogleCloudDialogflowV2beta1IntentMessageListSelect struct {
	Items    []GoogleCloudDialogflowV2beta1IntentMessageListSelectItem `json:"items,omitempty"`
	Subtitle *string                                                   `json:"subtitle,omitempty"`
	Title    *string                                                   `json:"title,omitempty"`
}
