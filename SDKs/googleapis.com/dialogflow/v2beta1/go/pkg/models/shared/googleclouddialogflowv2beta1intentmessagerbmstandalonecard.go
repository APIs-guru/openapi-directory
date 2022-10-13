package shared

type GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum string

const (
	GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnumCardOrientationUnspecified GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum = "CARD_ORIENTATION_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnumHorizontal                 GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum = "HORIZONTAL"
	GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnumVertical                   GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum = "VERTICAL"
)

type GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum string

const (
	GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnumThumbnailImageAlignmentUnspecified GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum = "THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnumLeft                               GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum = "LEFT"
	GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnumRight                              GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum = "RIGHT"
)

type GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard struct {
	CardContent             *GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent                               `json:"cardContent"`
	CardOrientation         *GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum         `json:"cardOrientation"`
	ThumbnailImageAlignment *GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum `json:"thumbnailImageAlignment"`
}
