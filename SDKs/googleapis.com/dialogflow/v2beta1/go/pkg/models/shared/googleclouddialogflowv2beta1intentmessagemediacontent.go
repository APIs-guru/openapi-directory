package shared

type GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnum string

const (
	GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnum = "RESPONSE_MEDIA_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnumAudio                        GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnum = "AUDIO"
)

// GoogleCloudDialogflowV2beta1IntentMessageMediaContent
// The media content card for Actions on Google.
type GoogleCloudDialogflowV2beta1IntentMessageMediaContent struct {
	MediaObjects []GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject `json:"mediaObjects,omitempty"`
	MediaType    *GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnum        `json:"mediaType,omitempty"`
}
