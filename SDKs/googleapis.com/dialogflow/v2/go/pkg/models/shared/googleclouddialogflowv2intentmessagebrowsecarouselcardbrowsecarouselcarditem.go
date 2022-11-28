package shared

// GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem
// Browsing carousel tile
type GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem struct {
	Description   *string                                                                                    `json:"description,omitempty"`
	Footer        *string                                                                                    `json:"footer,omitempty"`
	Image         *GoogleCloudDialogflowV2IntentMessageImage                                                 `json:"image,omitempty"`
	OpenURIAction *GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction `json:"openUriAction,omitempty"`
	Title         *string                                                                                    `json:"title,omitempty"`
}
