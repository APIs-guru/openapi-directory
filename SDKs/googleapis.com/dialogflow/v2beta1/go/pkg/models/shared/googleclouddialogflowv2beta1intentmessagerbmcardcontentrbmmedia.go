package shared

type GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum string

const (
	GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumHeightUnspecified GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum = "HEIGHT_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumShort             GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum = "SHORT"
	GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumMedium            GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum = "MEDIUM"
	GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumTall              GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum = "TALL"
)

// GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia
// Rich Business Messaging (RBM) Media displayed in Cards The following media-types are currently supported: Image Types * image/jpeg * image/jpg' * image/gif * image/png Video Types * video/h263 * video/m4v * video/mp4 * video/mpeg * video/mpeg4 * video/webm
type GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia struct {
	FileURI      *string                                                                    `json:"fileUri,omitempty"`
	Height       *GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum `json:"height,omitempty"`
	ThumbnailURI *string                                                                    `json:"thumbnailUri,omitempty"`
}
