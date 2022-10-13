package shared

type GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum string

const (
	GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnumResponseTypeUnspecified GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum = "RESPONSE_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnumPartial                 GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum = "PARTIAL"
	GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnumFinal                   GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum = "FINAL"
)

type GoogleCloudDialogflowCxV3beta1DetectIntentResponse struct {
	AllowCancellation *bool                                                               `json:"allowCancellation"`
	OutputAudio       *string                                                             `json:"outputAudio"`
	OutputAudioConfig *GoogleCloudDialogflowCxV3beta1OutputAudioConfig                    `json:"outputAudioConfig"`
	QueryResult       *GoogleCloudDialogflowCxV3beta1QueryResult                          `json:"queryResult"`
	ResponseID        *string                                                             `json:"responseId"`
	ResponseType      *GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum `json:"responseType"`
}
