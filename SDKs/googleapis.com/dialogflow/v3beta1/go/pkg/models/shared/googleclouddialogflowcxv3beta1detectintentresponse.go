package shared

type GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum string

const (
	GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnumResponseTypeUnspecified GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum = "RESPONSE_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnumPartial                 GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum = "PARTIAL"
	GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnumFinal                   GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum = "FINAL"
)

// GoogleCloudDialogflowCxV3beta1DetectIntentResponse
// The message returned from the DetectIntent method.
type GoogleCloudDialogflowCxV3beta1DetectIntentResponse struct {
	AllowCancellation *bool                                                               `json:"allowCancellation,omitempty"`
	OutputAudio       *string                                                             `json:"outputAudio,omitempty"`
	OutputAudioConfig *GoogleCloudDialogflowCxV3beta1OutputAudioConfig                    `json:"outputAudioConfig,omitempty"`
	QueryResult       *GoogleCloudDialogflowCxV3beta1QueryResult                          `json:"queryResult,omitempty"`
	ResponseID        *string                                                             `json:"responseId,omitempty"`
	ResponseType      *GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum `json:"responseType,omitempty"`
}
