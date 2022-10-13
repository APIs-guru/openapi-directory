package shared

type GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum string

const (
	GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnumResponseTypeUnspecified GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum = "RESPONSE_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnumPartial                 GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum = "PARTIAL"
	GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnumFinal                   GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum = "FINAL"
)

type GoogleCloudDialogflowCxV3DetectIntentResponse struct {
	AllowCancellation *bool                                                          `json:"allowCancellation"`
	OutputAudio       *string                                                        `json:"outputAudio"`
	OutputAudioConfig *GoogleCloudDialogflowCxV3OutputAudioConfig                    `json:"outputAudioConfig"`
	QueryResult       *GoogleCloudDialogflowCxV3QueryResult                          `json:"queryResult"`
	ResponseID        *string                                                        `json:"responseId"`
	ResponseType      *GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum `json:"responseType"`
}
