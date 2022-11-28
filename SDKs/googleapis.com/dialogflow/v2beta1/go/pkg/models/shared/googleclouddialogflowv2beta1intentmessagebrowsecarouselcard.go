package shared

type GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum string

const (
	GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnumImageDisplayOptionsUnspecified GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum = "IMAGE_DISPLAY_OPTIONS_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnumGray                           GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum = "GRAY"
	GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnumWhite                          GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum = "WHITE"
	GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnumCropped                        GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum = "CROPPED"
	GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnumBlurredBackground              GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum = "BLURRED_BACKGROUND"
)

// GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard
// Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
type GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard struct {
	ImageDisplayOptions *GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum `json:"imageDisplayOptions,omitempty"`
	Items               []GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem `json:"items,omitempty"`
}
