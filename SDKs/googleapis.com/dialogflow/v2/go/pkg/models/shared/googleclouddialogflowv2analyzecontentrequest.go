package shared

type GoogleCloudDialogflowV2AnalyzeContentRequest struct {
	AssistQueryParams *GoogleCloudDialogflowV2AssistQueryParameters `json:"assistQueryParams"`
	CxParameters      map[string]interface{}                        `json:"cxParameters"`
	EventInput        *GoogleCloudDialogflowV2EventInput            `json:"eventInput"`
	QueryParams       *GoogleCloudDialogflowV2QueryParameters       `json:"queryParams"`
	ReplyAudioConfig  *GoogleCloudDialogflowV2OutputAudioConfig     `json:"replyAudioConfig"`
	RequestID         *string                                       `json:"requestId"`
	TextInput         *GoogleCloudDialogflowV2TextInput             `json:"textInput"`
}
