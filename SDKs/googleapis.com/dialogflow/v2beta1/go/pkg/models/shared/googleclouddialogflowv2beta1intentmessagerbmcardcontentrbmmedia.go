package shared

type GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum string

const (
	GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumHeightUnspecified GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum = "HEIGHT_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumShort             GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum = "SHORT"
	GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumMedium            GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum = "MEDIUM"
	GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumTall              GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum = "TALL"
)

type GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia struct {
	FileURI      *string                                                                    `json:"fileUri,omitempty"`
	Height       *GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum `json:"height,omitempty"`
	ThumbnailURI *string                                                                    `json:"thumbnailUri,omitempty"`
}
