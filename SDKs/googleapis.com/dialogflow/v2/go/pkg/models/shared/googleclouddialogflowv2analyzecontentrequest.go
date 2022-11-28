package shared

// GoogleCloudDialogflowV2AnalyzeContentRequest
// The request message for Participants.AnalyzeContent.
type GoogleCloudDialogflowV2AnalyzeContentRequest struct {
	AssistQueryParams *GoogleCloudDialogflowV2AssistQueryParameters `json:"assistQueryParams,omitempty"`
	CxParameters      map[string]interface{}                        `json:"cxParameters,omitempty"`
	EventInput        *GoogleCloudDialogflowV2EventInput            `json:"eventInput,omitempty"`
	QueryParams       *GoogleCloudDialogflowV2QueryParameters       `json:"queryParams,omitempty"`
	ReplyAudioConfig  *GoogleCloudDialogflowV2OutputAudioConfig     `json:"replyAudioConfig,omitempty"`
	RequestID         *string                                       `json:"requestId,omitempty"`
	TextInput         *GoogleCloudDialogflowV2TextInput             `json:"textInput,omitempty"`
}
