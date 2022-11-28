package shared

type GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum string

const (
	GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumImageDisplayOptionsUnspecified GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum = "IMAGE_DISPLAY_OPTIONS_UNSPECIFIED"
	GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumGray                           GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum = "GRAY"
	GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumWhite                          GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum = "WHITE"
	GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumCropped                        GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum = "CROPPED"
	GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumBlurredBackground              GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum = "BLURRED_BACKGROUND"
)

// GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard
// Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
type GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard struct {
	ImageDisplayOptions *GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum `json:"imageDisplayOptions,omitempty"`
	Items               []GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem `json:"items,omitempty"`
}
