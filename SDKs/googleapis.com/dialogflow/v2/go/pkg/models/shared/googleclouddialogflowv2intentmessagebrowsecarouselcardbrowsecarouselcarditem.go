package shared

type GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem struct {
	Description   *string                                                                                    `json:"description"`
	Footer        *string                                                                                    `json:"footer"`
	Image         *GoogleCloudDialogflowV2IntentMessageImage                                                 `json:"image"`
	OpenURIAction *GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction `json:"openUriAction"`
	Title         *string                                                                                    `json:"title"`
}
