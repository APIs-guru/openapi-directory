package shared

type GoogleCloudDialogflowV2IntentMessageCarouselSelectItem struct {
	Description *string                                             `json:"description"`
	Image       *GoogleCloudDialogflowV2IntentMessageImage          `json:"image"`
	Info        *GoogleCloudDialogflowV2IntentMessageSelectItemInfo `json:"info"`
	Title       *string                                             `json:"title"`
}
