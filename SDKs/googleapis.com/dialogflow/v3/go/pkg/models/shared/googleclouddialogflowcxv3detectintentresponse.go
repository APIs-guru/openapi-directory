package shared




type GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum string

const (
    GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnumResponseTypeUnspecified GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum = "RESPONSE_TYPE_UNSPECIFIED"
GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnumPartial GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum = "PARTIAL"
GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnumFinal GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum = "FINAL"
)


type GoogleCloudDialogflowCxV3DetectIntentResponse struct {
    AllowCancellation *bool `json:"allowCancellation,omitempty"`
    OutputAudio *string `json:"outputAudio,omitempty"`
    OutputAudioConfig *GoogleCloudDialogflowCxV3OutputAudioConfig `json:"outputAudioConfig,omitempty"`
    QueryResult *GoogleCloudDialogflowCxV3QueryResult `json:"queryResult,omitempty"`
    ResponseID *string `json:"responseId,omitempty"`
    ResponseType *GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum `json:"responseType,omitempty"`
    
}

