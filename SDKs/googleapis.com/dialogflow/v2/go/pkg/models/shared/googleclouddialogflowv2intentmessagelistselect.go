package shared

// GoogleCloudDialogflowV2IntentMessageListSelect
// The card for presenting a list of options to select from.
type GoogleCloudDialogflowV2IntentMessageListSelect struct {
	Items    []GoogleCloudDialogflowV2IntentMessageListSelectItem `json:"items,omitempty"`
	Subtitle *string                                              `json:"subtitle,omitempty"`
	Title    *string                                              `json:"title,omitempty"`
}
