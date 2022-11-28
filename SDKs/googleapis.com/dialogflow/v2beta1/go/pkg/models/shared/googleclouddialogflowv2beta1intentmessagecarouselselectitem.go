package shared

// GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem
// An item in the carousel.
type GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem struct {
	Description *string                                                  `json:"description,omitempty"`
	Image       *GoogleCloudDialogflowV2beta1IntentMessageImage          `json:"image,omitempty"`
	Info        *GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo `json:"info,omitempty"`
	Title       *string                                                  `json:"title,omitempty"`
}
