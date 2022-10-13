package shared

type GoogleCloudDialogflowV2beta1AnalyzeContentRequest struct {
	AssistQueryParams *GoogleCloudDialogflowV2beta1AssistQueryParameters `json:"assistQueryParams"`
	AudioInput        *GoogleCloudDialogflowV2beta1AudioInput            `json:"audioInput"`
	CxCurrentPage     *string                                            `json:"cxCurrentPage"`
	CxParameters      map[string]interface{}                             `json:"cxParameters"`
	EventInput        *GoogleCloudDialogflowV2beta1EventInput            `json:"eventInput"`
	MessageSendTime   *string                                            `json:"messageSendTime"`
	QueryParams       *GoogleCloudDialogflowV2beta1QueryParameters       `json:"queryParams"`
	ReplyAudioConfig  *GoogleCloudDialogflowV2beta1OutputAudioConfig     `json:"replyAudioConfig"`
	RequestID         *string                                            `json:"requestId"`
	TextInput         *GoogleCloudDialogflowV2beta1TextInput             `json:"textInput"`
}
