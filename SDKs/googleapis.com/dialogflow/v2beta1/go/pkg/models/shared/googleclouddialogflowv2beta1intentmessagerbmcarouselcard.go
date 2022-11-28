package shared

type GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum string

const (
	GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnumCardWidthUnspecified GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum = "CARD_WIDTH_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnumSmall                GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum = "SMALL"
	GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnumMedium               GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum = "MEDIUM"
)

// GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard
// Carousel Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. If you want to show a single card with more control over the layout, please use RbmStandaloneCard instead.
type GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard struct {
	CardContents []GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent              `json:"cardContents,omitempty"`
	CardWidth    *GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum `json:"cardWidth,omitempty"`
}
