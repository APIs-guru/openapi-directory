package shared

type GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum string

const (
	GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnumCardWidthUnspecified GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum = "CARD_WIDTH_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnumSmall                GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum = "SMALL"
	GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnumMedium               GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum = "MEDIUM"
)

type GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard struct {
	CardContents []GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent              `json:"cardContents"`
	CardWidth    *GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum `json:"cardWidth"`
}
