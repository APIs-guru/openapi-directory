package shared

// GoogleCloudDialogflowV2beta1AnalyzeContentRequest
// The request message for Participants.AnalyzeContent.
type GoogleCloudDialogflowV2beta1AnalyzeContentRequest struct {
	AssistQueryParams *GoogleCloudDialogflowV2beta1AssistQueryParameters `json:"assistQueryParams,omitempty"`
	AudioInput        *GoogleCloudDialogflowV2beta1AudioInput            `json:"audioInput,omitempty"`
	CxCurrentPage     *string                                            `json:"cxCurrentPage,omitempty"`
	CxParameters      map[string]interface{}                             `json:"cxParameters,omitempty"`
	EventInput        *GoogleCloudDialogflowV2beta1EventInput            `json:"eventInput,omitempty"`
	MessageSendTime   *string                                            `json:"messageSendTime,omitempty"`
	QueryParams       *GoogleCloudDialogflowV2beta1QueryParameters       `json:"queryParams,omitempty"`
	ReplyAudioConfig  *GoogleCloudDialogflowV2beta1OutputAudioConfig     `json:"replyAudioConfig,omitempty"`
	RequestID         *string                                            `json:"requestId,omitempty"`
	TextInput         *GoogleCloudDialogflowV2beta1TextInput             `json:"textInput,omitempty"`
}
