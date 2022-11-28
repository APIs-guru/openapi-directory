package shared

// GoogleCloudDialogflowV2beta1IntentMessageListSelectItem
// An item in the list.
type GoogleCloudDialogflowV2beta1IntentMessageListSelectItem struct {
	Description *string                                                  `json:"description,omitempty"`
	Image       *GoogleCloudDialogflowV2beta1IntentMessageImage          `json:"image,omitempty"`
	Info        *GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo `json:"info,omitempty"`
	Title       *string                                                  `json:"title,omitempty"`
}
