package shared

type GoogleCloudDialogflowV2IntentMessageListSelectItem struct {
	Description *string                                             `json:"description,omitempty"`
	Image       *GoogleCloudDialogflowV2IntentMessageImage          `json:"image,omitempty"`
	Info        *GoogleCloudDialogflowV2IntentMessageSelectItemInfo `json:"info,omitempty"`
	Title       *string                                             `json:"title,omitempty"`
}
