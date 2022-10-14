package shared

type GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum string

const (
	GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum = "RESPONSE_MEDIA_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumAudio                        GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum = "AUDIO"
)

type GoogleCloudDialogflowV2IntentMessageMediaContent struct {
	MediaObjects []GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject `json:"mediaObjects,omitempty"`
	MediaType    *GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum        `json:"mediaType,omitempty"`
}
