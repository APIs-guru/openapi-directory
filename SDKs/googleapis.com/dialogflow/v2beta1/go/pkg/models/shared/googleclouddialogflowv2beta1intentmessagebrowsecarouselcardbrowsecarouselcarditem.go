package shared

type GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem struct {
	Description   *string                                                                                         `json:"description"`
	Footer        *string                                                                                         `json:"footer"`
	Image         *GoogleCloudDialogflowV2beta1IntentMessageImage                                                 `json:"image"`
	OpenURIAction *GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction `json:"openUriAction"`
	Title         *string                                                                                         `json:"title"`
}
